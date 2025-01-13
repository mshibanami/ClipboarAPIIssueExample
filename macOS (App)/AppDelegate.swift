//
//  AppDelegate.swift
//  macOS (App)
//
//  Created by Manabu Nakazawa on 13/1/2025.
//

import Cocoa

@main
class AppDelegate: NSObject, NSApplicationDelegate {

    func applicationDidFinishLaunching(_ notification: Notification) {
        // Override point for customization after application launch.
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return true
    }

}
