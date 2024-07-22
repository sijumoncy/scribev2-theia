/********************************************************************************
 * Copyright (C) 2020 TypeFox, EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

// import "../../src/browser/style/index.css";

import { WidgetFactory } from "@theia/core/lib/browser";
import { ContainerModule } from "@theia/core/shared/inversify";
import { GettingStartedWidget } from "@theia/getting-started/lib/browser/getting-started-widget";
import { TheiaIDEGettingStartedWidget } from "./theia-ide-getting-started-widget";

export default new ContainerModule((bind, _unbind, isBound, rebind) => {
  bind(TheiaIDEGettingStartedWidget).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: GettingStartedWidget.ID,
      createWidget: () =>
        context.container.get<TheiaIDEGettingStartedWidget>(
          TheiaIDEGettingStartedWidget
        ),
    }))
    .inSingletonScope();
});
