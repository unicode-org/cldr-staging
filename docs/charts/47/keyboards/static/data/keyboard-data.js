const _KeyboardData = 
{
 "keyboards": {
  "pt-t-k0-abnt2.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": {
      "@_id": "pt"
     }
    },
    "version": {
     "@_number": "0.0.0"
    },
    "info": {
     "@_name": "Portuguese (Brazil) (ABNT2)"
    },
    "displays": {
     "display": [
      {
       "@_output": "\\m{acute}",
       "@_display": "´"
      },
      {
       "@_output": "\\m{grave}",
       "@_display": "`"
      },
      {
       "@_output": "\\m{umlaut}",
       "@_display": "¨"
      },
      {
       "@_output": "\\m{caret}",
       "@_display": "^"
      },
      {
       "@_output": "\\m{tilde}",
       "@_display": "~"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "d-acute",
       "@_output": "\\m{acute}"
      },
      {
       "@_id": "d-grave",
       "@_output": "\\m{grave}"
      },
      {
       "@_id": "d-umlaut",
       "@_output": "\\m{umlaut}"
      },
      {
       "@_id": "d-caret",
       "@_output": "\\m{caret}"
      },
      {
       "@_id": "d-tilde",
       "@_output": "\\m{tilde}"
      },
      {
       "@_id": "c-cedilla",
       "@_output": "ç"
      },
      {
       "@_id": "C-cedilla",
       "@_output": "Ç"
      },
      {
       "@_id": "super-1",
       "@_output": "¹"
      },
      {
       "@_id": "super-2",
       "@_output": "²"
      },
      {
       "@_id": "super-3",
       "@_output": "³"
      },
      {
       "@_id": "ordinal-feminine",
       "@_output": "ª"
      },
      {
       "@_id": "ordinal-masculine",
       "@_output": "º"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "apos 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p d-acute open-square"
        },
        {
         "@_keys": "a s d f g h j k l c-cedilla d-tilde close-square"
        },
        {
         "@_keys": "backslash z x c v b n m comma period semi-colon slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "double-quote bang at hash dollar percent d-umlaut amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P d-grave open-curly"
        },
        {
         "@_keys": "A S D F G H J K L C-cedilla d-caret close-curly"
        },
        {
         "@_keys": "pipe Z X C V B N M open-angle close-angle colon question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      },
      {
       "row": [
        {
         "@_keys": "gap super-1 super-2 super-3 pound cent not gap gap gap gap gap section"
        },
        {
         "@_keys": "slash question degree gap gap gap gap gap gap gap gap ordinal-feminine"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap gap ordinal-masculine"
        },
        {
         "@_keys": "gap gap gap cruzeiro gap gap gap gap gap gap gap degree"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "altR"
      }
     ],
     "@_formId": "abnt2"
    },
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "pt-t-k0-abnt2",
    "@_conformsTo": "45"
   }
  },
  "mt.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "info": {
     "@_name": "Maltese",
     "@_author": "Steven R. Loomis",
     "@_layout": "QWERTY",
     "@_indicator": "MT"
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "a-grave",
       "@_output": "à"
      },
      {
       "@_id": "A-grave",
       "@_output": "À"
      },
      {
       "@_id": "e-grave",
       "@_output": "è"
      },
      {
       "@_id": "E-grave",
       "@_output": "È"
      },
      {
       "@_id": "i-grave",
       "@_output": "ì"
      },
      {
       "@_id": "I-grave",
       "@_output": "Ì"
      },
      {
       "@_id": "o-grave",
       "@_output": "ò"
      },
      {
       "@_id": "O-grave",
       "@_output": "Ò"
      },
      {
       "@_id": "u-grave",
       "@_output": "ù"
      },
      {
       "@_id": "U-grave",
       "@_output": "Ù"
      },
      {
       "@_id": "c-tikka",
       "@_output": "ċ"
      },
      {
       "@_id": "C-tikka",
       "@_output": "Ċ"
      },
      {
       "@_id": "g-tikka",
       "@_output": "ġ"
      },
      {
       "@_id": "G-tikka",
       "@_output": "Ġ"
      },
      {
       "@_id": "h-maqtugha",
       "@_output": "ħ"
      },
      {
       "@_id": "H-maqtugha",
       "@_output": "Ħ"
      },
      {
       "@_id": "z-tikka",
       "@_output": "ż"
      },
      {
       "@_id": "Z-tikka",
       "@_output": "Ż"
      },
      {
       "@_id": "c-cedilla",
       "@_output": "ç"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "c-tikka 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p g-tikka h-maqtugha"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon hash"
        },
        {
         "@_keys": "z-tikka z x c v b n m comma period slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "C-tikka bang double-quote euro dollar percent caret amp open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P G-tikka H-maqtugha"
        },
        {
         "@_keys": "A S D F G H J K L colon at tilde"
        },
        {
         "@_keys": "Z-tikka Z X C V B N M open-angle close-angle question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      },
      {
       "row": [
        {
         "@_keys": "grave gap gap pound gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap e-grave gap gap gap u-grave i-grave o-grave gap open-square close-square"
        },
        {
         "@_keys": "a-grave gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "backslash gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "altR"
      },
      {
       "row": [
        {
         "@_keys": "not gap gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap E-grave gap gap gap U-grave I-grave O-grave gap open-curly close-curly"
        },
        {
         "@_keys": "A-grave gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "pipe gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "altR shift"
      }
     ],
     "@_formId": "iso"
    },
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "mt",
    "@_conformsTo": "45"
   }
  },
  "mt-t-k0-47key.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "info": {
     "@_name": "Maltese 47-key",
     "@_author": "Steven R. Loomis",
     "@_layout": "QWERTY",
     "@_indicator": "MT"
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "a-grave",
       "@_output": "à"
      },
      {
       "@_id": "A-grave",
       "@_output": "À"
      },
      {
       "@_id": "e-grave",
       "@_output": "è"
      },
      {
       "@_id": "E-grave",
       "@_output": "È"
      },
      {
       "@_id": "i-grave",
       "@_output": "ì"
      },
      {
       "@_id": "I-grave",
       "@_output": "Ì"
      },
      {
       "@_id": "o-grave",
       "@_output": "ò"
      },
      {
       "@_id": "O-grave",
       "@_output": "Ò"
      },
      {
       "@_id": "u-grave",
       "@_output": "ù"
      },
      {
       "@_id": "U-grave",
       "@_output": "Ù"
      },
      {
       "@_id": "c-tikka",
       "@_output": "ċ"
      },
      {
       "@_id": "C-tikka",
       "@_output": "Ċ"
      },
      {
       "@_id": "g-tikka",
       "@_output": "ġ"
      },
      {
       "@_id": "G-tikka",
       "@_output": "Ġ"
      },
      {
       "@_id": "h-maqtugha",
       "@_output": "ħ"
      },
      {
       "@_id": "H-maqtugha",
       "@_output": "Ħ"
      },
      {
       "@_id": "z-tikka",
       "@_output": "ż"
      },
      {
       "@_id": "Z-tikka",
       "@_output": "Ż"
      },
      {
       "@_id": "c-cedilla",
       "@_output": "ç"
      },
      {
       "@_id": "gap",
       "@_gap": "true",
       "@_width": "1"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "c-tikka 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p g-tikka h-maqtugha z-tikka"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon apos"
        },
        {
         "@_keys": "z x c v b n m comma period slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "C-tikka bang at euro dollar percent caret amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P G-tikka H-maqtugha Z-tikka"
        },
        {
         "@_keys": "A S D F G H J K L colon double-quote"
        },
        {
         "@_keys": "Z X C V B N M open-angle close-angle question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      },
      {
       "row": [
        {
         "@_keys": "grave gap gap pound gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap e-grave gap gap gap u-grave i-grave o-grave gap open-square close-square backslash"
        },
        {
         "@_keys": "a-grave gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "altR"
      },
      {
       "row": [
        {
         "@_keys": "tilde gap gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap E-grave gap gap gap U-grave I-grave O-grave gap open-curly close-curly pipe"
        },
        {
         "@_keys": "A-grave gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "altR shift"
      }
     ],
     "@_formId": "us"
    },
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "mt-t-k0-47key",
    "@_conformsTo": "45"
   }
  },
  "ja-Hira-t-k0-flicks.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "version": {
     "@_number": "1.0.0"
    },
    "info": {
     "@_author": "Team Keyboard",
     "@_name": "Japanese Hiragana"
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "h-a",
       "@_output": "あ",
       "@_flickId": "h-a"
      },
      {
       "@_id": "h-i",
       "@_output": "い"
      },
      {
       "@_id": "h-u",
       "@_output": "う"
      },
      {
       "@_id": "h-e",
       "@_output": "え"
      },
      {
       "@_id": "h-o",
       "@_output": "お"
      },
      {
       "@_id": "h-ka",
       "@_output": "か",
       "@_flickId": "h-ka"
      },
      {
       "@_id": "h-ki",
       "@_output": "き"
      },
      {
       "@_id": "h-ku",
       "@_output": "く"
      },
      {
       "@_id": "h-ke",
       "@_output": "け"
      },
      {
       "@_id": "h-ko",
       "@_output": "こ"
      },
      {
       "@_id": "h-sa",
       "@_output": "さ",
       "@_flickId": "h-sa"
      },
      {
       "@_id": "h-si",
       "@_output": "し"
      },
      {
       "@_id": "h-su",
       "@_output": "す"
      },
      {
       "@_id": "h-se",
       "@_output": "せ"
      },
      {
       "@_id": "h-so",
       "@_output": "そ"
      },
      {
       "@_id": "h-ta",
       "@_output": "た",
       "@_flickId": "h-ta"
      },
      {
       "@_id": "h-ti",
       "@_output": "ち"
      },
      {
       "@_id": "h-tu",
       "@_output": "つ"
      },
      {
       "@_id": "h-te",
       "@_output": "て"
      },
      {
       "@_id": "h-to",
       "@_output": "と"
      },
      {
       "@_id": "h-na",
       "@_output": "な",
       "@_flickId": "h-na"
      },
      {
       "@_id": "h-ni",
       "@_output": "に"
      },
      {
       "@_id": "h-nu",
       "@_output": "ぬ"
      },
      {
       "@_id": "h-ne",
       "@_output": "ね"
      },
      {
       "@_id": "h-no",
       "@_output": "の"
      },
      {
       "@_id": "h-ha",
       "@_output": "は",
       "@_flickId": "h-ha"
      },
      {
       "@_id": "h-hi",
       "@_output": "ひ"
      },
      {
       "@_id": "h-hu",
       "@_output": "ふ"
      },
      {
       "@_id": "h-he",
       "@_output": "へ"
      },
      {
       "@_id": "h-ho",
       "@_output": "ほ"
      },
      {
       "@_id": "h-ma",
       "@_output": "ま",
       "@_flickId": "h-ma"
      },
      {
       "@_id": "h-mi",
       "@_output": "み"
      },
      {
       "@_id": "h-mu",
       "@_output": "む"
      },
      {
       "@_id": "h-me",
       "@_output": "め"
      },
      {
       "@_id": "h-mo",
       "@_output": "も"
      },
      {
       "@_id": "h-ya",
       "@_output": "や",
       "@_flickId": "h-ya"
      },
      {
       "@_id": "h-yu",
       "@_output": "ゆ"
      },
      {
       "@_id": "h-yo",
       "@_output": "よ"
      },
      {
       "@_id": "h-ra",
       "@_output": "ら",
       "@_flickId": "h-ra"
      },
      {
       "@_id": "h-ri",
       "@_output": "り"
      },
      {
       "@_id": "h-ru",
       "@_output": "る"
      },
      {
       "@_id": "h-re",
       "@_output": "れ"
      },
      {
       "@_id": "h-ro",
       "@_output": "ろ"
      },
      {
       "@_id": "h-wa",
       "@_output": "わ",
       "@_flickId": "h-wa"
      },
      {
       "@_id": "h-wo",
       "@_output": "を"
      },
      {
       "@_id": "h-n",
       "@_output": "ん"
      },
      {
       "@_id": "h-period",
       "@_output": "。",
       "@_flickId": "marks"
      },
      {
       "@_id": "num",
       "@_layerId": "num"
      },
      {
       "@_id": "sym",
       "@_layerId": "sym"
      },
      {
       "@_id": "base",
       "@_layerId": "base"
      },
      {
       "@_id": "voiced",
       "@_output": "\\u{3099}"
      },
      {
       "@_id": "semivoiced",
       "@_output": "\\u{309A}"
      },
      {
       "@_id": "smalltsu",
       "@_output": "っ"
      },
      {
       "@_id": "smallya",
       "@_output": "ゃ"
      }
     ]
    },
    "flicks": {
     "flick": [
      {
       "flickSegment": [
        {
         "@_directions": "w",
         "@_keyId": "voiced"
        },
        {
         "@_directions": "n",
         "@_keyId": "h-period"
        },
        {
         "@_directions": "e",
         "@_keyId": "semivoiced"
        },
        {
         "@_directions": "s",
         "@_keyId": "period"
        }
       ],
       "@_id": "marks"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-a"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-i"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-u"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-e"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-o"
        }
       ],
       "@_id": "h-a"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ka"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-ki"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-ku"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-ke"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-ko"
        }
       ],
       "@_id": "h-ka"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-sa"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-si"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-su"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-se"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-so"
        }
       ],
       "@_id": "h-sa"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ta"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-ti"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-tu"
        },
        {
         "@_directions": "se",
         "@_keyId": "smalltsu"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-te"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-to"
        }
       ],
       "@_id": "h-ta"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-na"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-ni"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-nu"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-ne"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-no"
        }
       ],
       "@_id": "h-na"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ha"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-hi"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-hu"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-he"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-ho"
        }
       ],
       "@_id": "h-ha"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ma"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-mi"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-mu"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-me"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-mo"
        }
       ],
       "@_id": "h-ma"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ya"
        },
        {
         "@_directions": "ne",
         "@_keyId": "smallya"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-yu"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-yo"
        }
       ],
       "@_id": "h-ya"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-ra"
        },
        {
         "@_directions": "w",
         "@_keyId": "h-ri"
        },
        {
         "@_directions": "e",
         "@_keyId": "h-ru"
        },
        {
         "@_directions": "sw",
         "@_keyId": "h-re"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-ro"
        }
       ],
       "@_id": "h-ra"
      },
      {
       "flickSegment": [
        {
         "@_directions": "n",
         "@_keyId": "h-wa"
        },
        {
         "@_directions": "s",
         "@_keyId": "h-wo"
        }
       ],
       "@_id": "h-wa"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "h-a h-ka h-sa"
        },
        {
         "@_keys": "h-ta h-na h-ha"
        },
        {
         "@_keys": "h-ma h-ya h-ra"
        },
        {
         "@_keys": "sym h-wa h-period num"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_id": "base"
      },
      {
       "row": [
        {
         "@_keys": "bang double-quote hash"
        },
        {
         "@_keys": "dollar percent amp"
        },
        {
         "@_keys": "apos open-paren close-paren"
        },
        {
         "@_keys": "equal tilde pipe"
        },
        {
         "@_keys": "base"
        }
       ],
       "@_id": "sym"
      },
      {
       "row": [
        {
         "@_keys": "1 2 3"
        },
        {
         "@_keys": "4 5 6"
        },
        {
         "@_keys": "7 8 9"
        },
        {
         "@_keys": "comma 0 period"
        },
        {
         "@_keys": "base"
        }
       ],
       "@_id": "num"
      }
     ],
     "@_formId": "touch"
    },
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "ja-Hira-t-k0-flicks",
    "@_conformsTo": "45"
   }
  },
  "bn.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": [
      {
       "@_id": "as"
      },
      {
       "@_id": "syl"
      }
     ]
    },
    "version": {
     "@_number": "1.3.0"
    },
    "info": {
     "@_name": "SIL Bengali-Assamese Phonetic",
     "@_indicator": "bn",
     "@_layout": "QWERTY"
    },
    "displays": {
     "display": [
      {
       "@_keyId": "au-lengthener",
       "@_display": "ৗ"
      },
      {
       "@_keyId": "vis-hasant",
       "@_display": "্"
      },
      {
       "@_keyId": "more",
       "@_display": "…"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "1",
       "@_output": "১"
      },
      {
       "@_id": "2",
       "@_output": "২"
      },
      {
       "@_id": "3",
       "@_output": "৩"
      },
      {
       "@_id": "4",
       "@_output": "৪"
      },
      {
       "@_id": "5",
       "@_output": "৫"
      },
      {
       "@_id": "6",
       "@_output": "৬"
      },
      {
       "@_id": "7",
       "@_output": "৭"
      },
      {
       "@_id": "8",
       "@_output": "৮"
      },
      {
       "@_id": "9",
       "@_output": "৯"
      },
      {
       "@_id": "0",
       "@_output": "০"
      },
      {
       "@_id": "au-lengthener",
       "@_output": "\\m{A}"
      },
      {
       "@_id": "candrabindu",
       "@_output": "\\u{0981}"
      },
      {
       "@_id": "hasant",
       "@_output": "\\u{09CD}"
      },
      {
       "@_id": "more",
       "@_output": "\\m{q}"
      },
      {
       "@_id": "nukta",
       "@_output": "\\u{09BC}"
      },
      {
       "@_id": "vis-hasant",
       "@_output": "\\m{X}"
      },
      {
       "@_id": "ā",
       "@_output": "\\u{09BE}"
      },
      {
       "@_id": "ai",
       "@_output": "\\u{09C8}"
      },
      {
       "@_id": "au",
       "@_output": "\\u{09CC}"
      },
      {
       "@_id": "ba",
       "@_output": "ব"
      },
      {
       "@_id": "bha",
       "@_output": "ভ"
      },
      {
       "@_id": "ca",
       "@_output": "চ"
      },
      {
       "@_id": "cha",
       "@_output": "ছ"
      },
      {
       "@_id": "ḍa",
       "@_output": "ড"
      },
      {
       "@_id": "da",
       "@_output": "দ"
      },
      {
       "@_id": "dahri",
       "@_output": "।"
      },
      {
       "@_id": "ḍha",
       "@_output": "ঢ"
      },
      {
       "@_id": "dha",
       "@_output": "ধ"
      },
      {
       "@_id": "e",
       "@_output": "\\u{09C7}"
      },
      {
       "@_id": "ga",
       "@_output": "গ"
      },
      {
       "@_id": "gha",
       "@_output": "ঘ"
      },
      {
       "@_id": "ha",
       "@_output": "হ"
      },
      {
       "@_id": "i",
       "@_output": "\\u{09BF}"
      },
      {
       "@_id": "ī",
       "@_output": "\\u{09C0}"
      },
      {
       "@_id": "ja",
       "@_output": "জ"
      },
      {
       "@_id": "jha",
       "@_output": "ঝ"
      },
      {
       "@_id": "ka",
       "@_output": "ক"
      },
      {
       "@_id": "kha",
       "@_output": "খ"
      },
      {
       "@_id": "la",
       "@_output": "ল"
      },
      {
       "@_id": "ṃ",
       "@_output": "\\u{0982}"
      },
      {
       "@_id": "ma",
       "@_output": "ম"
      },
      {
       "@_id": "ṅa",
       "@_output": "ঙ"
      },
      {
       "@_id": "ña",
       "@_output": "ঞ"
      },
      {
       "@_id": "ṇa",
       "@_output": "ণ"
      },
      {
       "@_id": "na",
       "@_output": "ন"
      },
      {
       "@_id": "o",
       "@_output": "\\u{09CB}"
      },
      {
       "@_id": "pa",
       "@_output": "প"
      },
      {
       "@_id": "pha",
       "@_output": "ফ"
      },
      {
       "@_id": "ṛ",
       "@_output": "\\u{09C3}"
      },
      {
       "@_id": "ra",
       "@_output": "র"
      },
      {
       "@_id": "śa",
       "@_output": "শ"
      },
      {
       "@_id": "sa",
       "@_output": "স"
      },
      {
       "@_id": "sha",
       "@_output": "ষ"
      },
      {
       "@_id": "ṭa",
       "@_output": "ট"
      },
      {
       "@_id": "ta",
       "@_output": "ত"
      },
      {
       "@_id": "ṭha",
       "@_output": "ঠ"
      },
      {
       "@_id": "tha",
       "@_output": "থ"
      },
      {
       "@_id": "u",
       "@_output": "\\u{09C1}"
      },
      {
       "@_id": "ū",
       "@_output": "\\u{09C2}"
      },
      {
       "@_id": "wa",
       "@_output": "ৱ"
      },
      {
       "@_id": "ya",
       "@_output": "য"
      },
      {
       "@_id": "ẏa",
       "@_output": "য়"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "candrabindu 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "more wa e ra ta ya u i o pa open-square close-square backslash"
        },
        {
         "@_keys": "ā sa da ṭa ga ha ja ka la semi-colon apos"
        },
        {
         "@_keys": "śa hasant ca ḍa ba na ma comma dahri slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "ṃ bang at hash dollar percent caret amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "gap ña ai ṛ tha ẏa ū ī au pha open-curly close-curly pipe"
        },
        {
         "@_keys": "au-lengthener sha dha ṭha gha gap jha kha gap colon double-quote"
        },
        {
         "@_keys": "gap vis-hasant cha ḍha bha ṇa ṅa open-angle nukta question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      }
     ],
     "@_formId": "us"
    },
    "transforms": [
     {
      "transformGroup": [
       {
        "transform": [
         {
          "@_from": "\\u{09C7}\\m{A}",
          "@_to": "\\u{09CC}"
         },
         {
          "@_from": "\\m{q}:",
          "@_to": "\\u{0983}"
         },
         {
          "@_from": "\\m{q}L",
          "@_to": "ৡ"
         },
         {
          "@_from": "\\m{q}।",
          "@_to": "॥"
         },
         {
          "@_from": "\\m{q}ড",
          "@_to": "ড়"
         },
         {
          "@_from": "\\m{q}ঢ",
          "@_to": "ঢ়"
         },
         {
          "@_from": "\\m{q}ত",
          "@_to": "ৎ"
         },
         {
          "@_from": "\\m{q}য",
          "@_to": "য়"
         },
         {
          "@_from": "\\m{q}র",
          "@_to": "ৰ"
         },
         {
          "@_from": "\\m{q}ল",
          "@_to": "ঌ"
         },
         {
          "@_from": "\\m{q}\\u{09BE}",
          "@_to": "অ"
         },
         {
          "@_from": "\\m{q}\\u{09BF}",
          "@_to": "ই"
         },
         {
          "@_from": "\\m{q}\\u{09C0}",
          "@_to": "ঈ"
         },
         {
          "@_from": "\\m{q}\\u{09C1}",
          "@_to": "উ"
         },
         {
          "@_from": "\\m{q}\\u{09C2}",
          "@_to": "ঊ"
         },
         {
          "@_from": "\\m{q}\\u{09C3}",
          "@_to": "ৠ"
         },
         {
          "@_from": "\\m{q}\\u{09C7}",
          "@_to": "এ"
         },
         {
          "@_from": "\\m{q}\\u{09C8}",
          "@_to": "ঐ"
         },
         {
          "@_from": "\\m{q}\\u{09CB}",
          "@_to": "ও"
         },
         {
          "@_from": "\\m{q}\\u{09CC}",
          "@_to": "ঔ"
         },
         {
          "@_from": "\\m{q}\\m{A}",
          "@_to": "আ"
         },
         {
          "@_from": "\\m{q}\\m{X}",
          "@_to": "\\u{09CD}\\u{200C}"
         }
        ]
       },
       {
        "reorder": [
         {
          "@_from": "\\u{09BC}",
          "@_tertiary": "3"
         },
         {
          "@_from": "\\u{09CD}[\\u{0980}\\u{0985}-\\u{098C}\\u{098F}\\u{0990}\\u{0993}-\\u{09A8}\\u{09AA}-\\u{09B0}\\u{09B2}\\u{09B6}-\\u{09B9}\\u{09BD}\\u{09DC}\\u{09DD}\\u{09DF}-\\u{09E1}\\u{09E6}-\\u{09F1}\\u{09FC}]",
          "@_order": "10",
          "@_tertiaryBase": "true"
         },
         {
          "@_from": "\\u{09CD}[\\u{200C}\\u{200D}][\\u{0980}\\u{0985}-\\u{098C}\\u{098F}\\u{0990}\\u{0993}-\\u{09A8}\\u{09AA}-\\u{09B0}\\u{09B2}\\u{09B6}-\\u{09B9}\\u{09BD}\\u{09DC}\\u{09DD}\\u{09DF}-\\u{09E1}\\u{09E6}-\\u{09F1}\\u{09FC}]",
          "@_order": "10",
          "@_tertiaryBase": "true"
         },
         {
          "@_from": "\\u{09CD}",
          "@_order": "120",
          "@_tertiaryBase": "true"
         },
         {
          "@_from": "[\\u{09BF}\\u{09C7}\\u{09C8}]",
          "@_order": "60"
         },
         {
          "@_from": "[\\u{09C1}-\\u{09C4}\\u{09E2}\\u{09E3}]",
          "@_order": "70"
         },
         {
          "@_from": "[\\u{09BE}\\u{09C0}\\u{09CB}\\u{09CC}\\u{09D7}]",
          "@_order": "75"
         },
         {
          "@_from": "\\u{0981}",
          "@_order": "85"
         },
         {
          "@_from": "[\\u{0982}\\u{0983}]",
          "@_order": "95"
         },
         {
          "@_from": "\\u{09FE}",
          "@_order": "117"
         }
        ]
       }
      ],
      "@_type": "simple"
     }
    ],
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "bn",
    "@_conformsTo": "45"
   }
  },
  "pcm.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "version": {
     "@_number": "1.0.0"
    },
    "info": {
     "@_name": "Naijíriá Píjin"
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "grave",
       "@_output": "\\u{300}"
      },
      {
       "@_id": "backquote",
       "@_output": "`"
      },
      {
       "@_id": "acute",
       "@_output": "\\u{301}"
      },
      {
       "@_id": "odot",
       "@_output": "ọ"
      },
      {
       "@_id": "Odot",
       "@_output": "Ọ"
      },
      {
       "@_id": "edot",
       "@_output": "ẹ"
      },
      {
       "@_id": "Edot",
       "@_output": "Ẹ"
      },
      {
       "@_id": "naira",
       "@_output": "₦"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "grave 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "acute w e r t y u i o p open-square close-square"
        },
        {
         "@_keys": "a s d f g h j k l odot edot slash"
        },
        {
         "@_keys": "slash z c v b n m comma period semi-colon apos"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "grave bang at hash dollar naira percent amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "A S D F G H J K L Odot Edot question"
        },
        {
         "@_keys": "A S D F G H J K L Odot Edot"
        },
        {
         "@_keys": "question Z C V B N M open-angle close-angle colon double-quote"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      },
      {
       "row": [
        {
         "@_keys": "backquote 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "Q W E R T Y U I O P open-square close-square"
        },
        {
         "@_keys": "A S D F G H J K L Odot Edot slash"
        },
        {
         "@_keys": "slash Z C V B N M comma period semi-colon apos"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "caps"
      }
     ],
     "@_formId": "iso"
    },
    "transforms": [
     {
      "transformGroup": [
       {
        "transform": [
         {
          "@_from": "''",
          "@_to": "\\u{323}"
         }
        ]
       }
      ],
      "@_type": "simple"
     }
    ],
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "pcm",
    "@_conformsTo": "45"
   }
  },
  "fr.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "version": {
     "@_number": "1.0.0"
    },
    "info": {
     "@_author": "Team Keyboard",
     "@_name": "Français normalisé (AZERTY)",
     "@_layout": "AZERTY",
     "@_indicator": "FR"
    },
    "displays": {
     "display": [
      {
       "@_output": "\\u0300",
       "@_display": "${grave}"
      },
      {
       "@_output": "\\m{acute}",
       "@_display": "´"
      },
      {
       "@_output": "\\m{grave}",
       "@_display": "`"
      },
      {
       "@_output": "\\m{umlaut}",
       "@_display": "¨"
      },
      {
       "@_output": "\\m{caret}",
       "@_display": "^"
      },
      {
       "@_output": "\\m{tilde}",
       "@_display": "~"
      },
      {
       "@_output": "\\m{invbreve}",
       "@_display": "\\u{20}\\u{0311}"
      },
      {
       "@_keyId": "mark-currency",
       "@_display": "\\u{00A4}"
      },
      {
       "@_keyId": "mark-greek",
       "@_display": "\\u{B5}"
      },
      {
       "@_keyId": "mark-euro",
       "@_display": "Eu"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "mark-acute",
       "@_output": "\\m{acute}"
      },
      {
       "@_id": "mark-breve",
       "@_output": "\\m{breve}"
      },
      {
       "@_id": "mark-caret",
       "@_output": "\\m{caret}"
      },
      {
       "@_id": "mark-caron",
       "@_output": "\\m{caron}"
      },
      {
       "@_id": "mark-cedilla",
       "@_output": "\\m{cedilla}"
      },
      {
       "@_id": "mark-invbreve",
       "@_output": "\\m{invbreve}"
      },
      {
       "@_id": "mark-comma",
       "@_output": "\\m{comma}"
      },
      {
       "@_id": "mark-currency",
       "@_output": "\\m{currency}"
      },
      {
       "@_id": "mark-dotabove",
       "@_output": "\\m{dotabove}"
      },
      {
       "@_id": "mark-dotbelow",
       "@_output": "\\m{dotbelow}"
      },
      {
       "@_id": "mark-doubleacute",
       "@_output": "\\m{doubleacute}"
      },
      {
       "@_id": "mark-doublegrave",
       "@_output": "\\m{doublegrave}"
      },
      {
       "@_id": "mark-euro",
       "@_output": "\\m{euro}"
      },
      {
       "@_id": "mark-grave",
       "@_output": "\\m{grave}"
      },
      {
       "@_id": "mark-macron",
       "@_output": "\\m{macron}"
      },
      {
       "@_id": "mark-ogonek",
       "@_output": "\\m{ogonek}"
      },
      {
       "@_id": "mark-ring",
       "@_output": "\\m{ring}"
      },
      {
       "@_id": "mark-greek",
       "@_output": "\\m{greek}"
      },
      {
       "@_id": "mark-solidus",
       "@_output": "\\m{solidus}"
      },
      {
       "@_id": "mark-stroke",
       "@_output": "\\m{stroke}"
      },
      {
       "@_id": "mark-submacron",
       "@_output": "\\m{submacron}"
      },
      {
       "@_id": "mark-tilde",
       "@_output": "\\m{tilde}"
      },
      {
       "@_id": "mark-umlaut",
       "@_output": "\\m{umlaut}"
      },
      {
       "@_id": "nbsp",
       "@_output": "\\u{A0}"
      },
      {
       "@_id": "nnbsp",
       "@_output": "\\u{202F}"
      },
      {
       "@_id": "e-grave",
       "@_output": "è"
      },
      {
       "@_id": "e-acute",
       "@_output": "é"
      },
      {
       "@_id": "c-cedilla",
       "@_output": "ç"
      },
      {
       "@_id": "a-acute",
       "@_output": "á"
      },
      {
       "@_id": "a-grave",
       "@_output": "à"
      },
      {
       "@_id": "e-caret",
       "@_output": "ê"
      },
      {
       "@_id": "bullet",
       "@_output": "•"
      },
      {
       "@_id": "umlaut",
       "@_output": "¨"
      },
      {
       "@_id": "sub-2",
       "@_output": "₂"
      },
      {
       "@_id": "super-2",
       "@_output": "²",
       "@_longPressKeyIds": "sub-2"
      },
      {
       "@_id": "en-dash",
       "@_output": "–"
      },
      {
       "@_id": "plus-minus",
       "@_output": "±"
      },
      {
       "@_id": "vulgar-half",
       "@_output": "½"
      },
      {
       "@_id": "vulgar-quarter",
       "@_output": "¼"
      },
      {
       "@_id": "ellipsis",
       "@_output": "…"
      },
      {
       "@_id": "open-apos",
       "@_output": "‘"
      },
      {
       "@_id": "close-apos",
       "@_output": "’"
      },
      {
       "@_id": "open-g",
       "@_output": "«"
      },
      {
       "@_id": "close-g",
       "@_output": "»"
      },
      {
       "@_id": "theta",
       "@_output": "θ"
      },
      {
       "@_id": "Theta",
       "@_output": "ϴ"
      },
      {
       "@_id": "tm",
       "@_output": "™"
      },
      {
       "@_id": "open-double",
       "@_output": "“"
      },
      {
       "@_id": "close-double",
       "@_output": "”"
      },
      {
       "@_id": "oe",
       "@_output": "œ"
      },
      {
       "@_id": "Oe",
       "@_output": "Œ"
      },
      {
       "@_id": "registered",
       "@_output": "®"
      },
      {
       "@_id": "minus-sign",
       "@_output": "−"
      },
      {
       "@_id": "ss",
       "@_output": "ß"
      },
      {
       "@_id": "infinity",
       "@_output": "∞"
      },
      {
       "@_id": "division",
       "@_output": "÷"
      },
      {
       "@_id": "less-equal",
       "@_output": "⩽"
      },
      {
       "@_id": "greater-equal",
       "@_output": "⩾"
      },
      {
       "@_id": "copy",
       "@_output": "©"
      },
      {
       "@_id": "inverse-question",
       "@_output": "¿"
      },
      {
       "@_id": "inverse-bang",
       "@_output": "¡"
      },
      {
       "@_id": "middle-dot",
       "@_output": "•"
      },
      {
       "@_id": "A-grave",
       "@_output": "À"
      },
      {
       "@_id": "E-acute",
       "@_output": "É"
      },
      {
       "@_id": "E-caret",
       "@_output": "Ê"
      },
      {
       "@_id": "em-dash",
       "@_output": "—"
      },
      {
       "@_id": "open-single",
       "@_output": "’"
      },
      {
       "@_id": "close-single",
       "@_output": "’"
      },
      {
       "@_id": "u-grave",
       "@_output": "Ù"
      },
      {
       "@_id": "radix",
       "@_output": "√"
      },
      {
       "@_id": "C-cedilla",
       "@_output": "Ç"
      },
      {
       "@_id": "not-equal",
       "@_output": "≠"
      },
      {
       "@_id": "open-angle-quote",
       "@_output": "‹"
      },
      {
       "@_id": "close-angle-quote",
       "@_output": "›"
      },
      {
       "@_id": "E-grave",
       "@_output": "È"
      },
      {
       "@_id": "U-grave",
       "@_output": "Ù"
      },
      {
       "@_id": "nb-hyphen",
       "@_output": "‑"
      },
      {
       "@_id": "multiplication",
       "@_output": "×"
      },
      {
       "@_id": "ezh",
       "@_output": "ʒ"
      },
      {
       "@_id": "Ezh",
       "@_output": "Ʒ"
      },
      {
       "@_id": "ae",
       "@_output": "æ"
      },
      {
       "@_id": "Ae",
       "@_output": "Æ"
      },
      {
       "@_id": "permille",
       "@_output": "‰"
      },
      {
       "@_id": "dbl-dagger",
       "@_output": "‡"
      },
      {
       "@_id": "dagger",
       "@_output": "†"
      },
      {
       "@_id": "asym-equal",
       "@_output": "≃"
      },
      {
       "@_id": "Ss",
       "@_output": "ẞ"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "at a-grave e-acute e-grave e-caret open-paren close-paren open-apos close-apos open-g close-g apos mark-caret"
        },
        {
         "@_keys": "a z e r t y u i o p hyphen plus"
        },
        {
         "@_keys": "q s d f g h j k l m slash asterisk"
        },
        {
         "@_keys": "open-angle w x c v b n period comma colon semi-colon"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "hash 1 2 3 4 5 6 7 8 9 0 double-quote mark-umlaut"
        },
        {
         "@_keys": "A Z E R T Y U I O P en-dash plus-minus"
        },
        {
         "@_keys": "Q S D F G H J K L M backslash vulgar-half"
        },
        {
         "@_keys": "close-angle W X C V B N question bang ellipsis equal"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      },
      {
       "row": [
        {
         "@_keys": "mark-breve section mark-acute mark-grave amp open-square close-square mark-macron underscore open-double close-double degree mark-caron"
        },
        {
         "@_keys": "ae pound euro registered open-curly close-curly u-grave mark-dotabove oe percent minus-sign dagger"
        },
        {
         "@_keys": "theta ss dollar mark-currency mark-greek mark-euro gap mark-solidus pipe infinity division multiplication"
        },
        {
         "@_keys": "less-equal ezh copy c-cedilla mark-cedilla mark-stroke mark-tilde inverse-question inverse-bang middle-dot asym-equal"
        },
        {
         "@_keys": "nbsp"
        }
       ],
       "@_modifiers": "ctrl alt"
      },
      {
       "row": [
        {
         "@_keys": "mark-invbreve A-grave E-acute E-grave E-caret mark-doubleacute mark-doublegrave gap em-dash open-angle-quote close-angle-quote mark-ring gap"
        },
        {
         "@_keys": "Ae gap gap gap tm gap U-grave mark-dotbelow Oe permille nb-hyphen dbl-dagger"
        },
        {
         "@_keys": "Theta Ss gap gap gap mark-submacron gap gap gap gap radix vulgar-quarter"
        },
        {
         "@_keys": "greater-equal Ezh gap C-cedilla mark-ogonek gap gap gap mark-comma gap not-equal"
        },
        {
         "@_keys": "nnbsp"
        }
       ],
       "@_modifiers": "ctrl alt shift"
      }
     ],
     "@_formId": "iso"
    },
    "variables": {
     "string": [
      {
       "@_id": "grave",
       "@_value": "`"
      },
      {
       "@_id": "caret",
       "@_value": "^"
      },
      {
       "@_id": "umlaut",
       "@_value": "¨"
      },
      {
       "@_id": "tilde",
       "@_value": "~"
      }
     ],
     "set": [
      {
       "@_id": "vowel",
       "@_value": "a e i o u  A E I O U"
      },
      {
       "@_id": "upaccentable",
       "@_value": "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z    Ʒ Æ Œ"
      },
      {
       "@_id": "lwaccentable",
       "@_value": "a b c d e f g h i j k l m n o p q r s t u v w x y z    ʒ æ œ"
      },
      {
       "@_id": "accentable",
       "@_value": "$[upaccentable] $[lwaccentable]"
      },
      {
       "@_id": "currfrom",
       "@_value": "e r t y p s d f g h k l m w c b n A R T P S D F L M  C B"
      },
      {
       "@_id": "currto",
       "@_value": "₠ ₽ ₸ ¥ ₱ ₪ ₫ ƒ ₲ ₴ ₭ ₺ ₥ ₩ ¢ ₿ ₦ ₳ ₹ ₮ ₧ ₷ ₯ ₣ ₤ ℳ ₡ ﺀ"
      },
      {
       "@_id": "greekfrom",
       "@_value": "a z e r u i o p s d g h j k l m x b n A Z E R U I O P S D G H J K L M X B N"
      },
      {
       "@_id": "greekto",
       "@_value": "α ζ ε ρ θ ι ο π σ δ γ η ξ κ λ μ ς β ν Α Ζ Ε Ρ Θ Ι Ο Π Σ Δ Γ Η Ξ Κ Λ Μ Σ Β Ν"
      },
      {
       "@_id": "eurofrom",
       "@_value": "a e t i o s d g j  ‘ ’ «  » '   E T I D G J  7 8 9 0"
      },
      {
       "@_id": "euroto",
       "@_value": "ª ə þ ı º ſ ð ŋ ij ‚ ‘ „ ‟ ’    Ə Þ İ Đ Ŋ IJ › ‹ » «"
      },
      {
       "@_id": "digits",
       "@_value": "0 1 2 3 4 5 6 7 8 9"
      },
      {
       "@_id": "superdigits",
       "@_value": "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹"
      },
      {
       "@_id": "subdigits",
       "@_value": "₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉"
      }
     ]
    },
    "transforms": [
     {
      "transformGroup": [
       {
        "transform": [
         {
          "@_from": "\\m{breve}($[digits])",
          "@_to": "$[1:superdigits]"
         },
         {
          "@_from": "\\m{invbreve}($[digits])",
          "@_to": "$[1:subdigits]"
         },
         {
          "@_from": "\\m{dotabove}i",
          "@_to": "ı"
         },
         {
          "@_from": "\\m{breve}($[accentable])",
          "@_to": "$1\\u{0306}"
         },
         {
          "@_from": "\\m{umlaut}($[accentable])",
          "@_to": "$1\\u{0308}"
         },
         {
          "@_from": "\\m{invbreve}($[accentable])",
          "@_to": "$1\\u{0311}"
         },
         {
          "@_from": "\\m{acute}($[accentable])",
          "@_to": "$1\\u{0301}"
         },
         {
          "@_from": "\\m{caret}($[accentable])",
          "@_to": "$1\\u{0302}"
         },
         {
          "@_from": "\\m{caron}($[accentable])",
          "@_to": "$1\\u{030c}"
         },
         {
          "@_from": "\\m{cedilla}($[accentable])",
          "@_to": "$1\\u{0327}"
         },
         {
          "@_from": "\\m{comma}($[accentable])",
          "@_to": "$1\\u{0326}"
         },
         {
          "@_from": "\\m{dotabove}($[accentable])",
          "@_to": "$1\\u{0307}"
         },
         {
          "@_from": "\\m{dotbelow}($[accentable])",
          "@_to": "$1\\u{0323}"
         },
         {
          "@_from": "\\m{doubleacute}($[accentable])",
          "@_to": "$1\\u{030b}"
         },
         {
          "@_from": "\\m{doublegrave}($[accentable])",
          "@_to": "$1\\u{030f}"
         },
         {
          "@_from": "\\m{grave}($[accentable])",
          "@_to": "$1\\u{0300}"
         },
         {
          "@_from": "\\m{macron}($[accentable])",
          "@_to": "$1\\u{0304}"
         },
         {
          "@_from": "\\m{ogonek}($[accentable])",
          "@_to": "$1\\u{0328}"
         },
         {
          "@_from": "\\m{ring}($[accentable])",
          "@_to": "$1\\u{030a}"
         },
         {
          "@_from": "\\m{solidus}($[accentable])",
          "@_to": "$1\\u{338}"
         },
         {
          "@_from": "\\m{stroke}($[accentable])",
          "@_to": "$1\\u{0335}"
         },
         {
          "@_from": "\\m{submacron}($[accentable])",
          "@_to": "$1\\u{0331}"
         },
         {
          "@_from": "\\m{tilde}($[accentable])",
          "@_to": "$1\\u{0303}"
         },
         {
          "@_from": "\\m{currency}($[currfrom])",
          "@_to": "$[1:currto]"
         },
         {
          "@_from": "\\m{greek}\\m{greek}",
          "@_to": "\\u{B5}"
         },
         {
          "@_from": "\\m{greek}($[greekfrom])",
          "@_to": "$[1:greekto]"
         },
         {
          "@_from": "\\m{euro}($[eurofrom])",
          "@_to": "$[1:euroto]"
         },
         {
          "@_from": "\\m{currency}®",
          "@_to": "₨"
         },
         {
          "@_from": "\\m{currency}%",
          "@_to": "₰"
         },
         {
          "@_from": "\\m{currency}\\|",
          "@_to": "₾"
         },
         {
          "@_from": "\\m{currency}∞",
          "@_to": "₼"
         },
         {
          "@_from": "\\m{currency}ç",
          "@_to": "₢"
         },
         {
          "@_from": "\\m{currency}\\m{currency}",
          "@_to": "¤"
         },
         {
          "@_from": "\\m{currency}Ç",
          "@_to": "₵"
         }
        ]
       },
       {
        "transform": [
         {
          "@_from": "\\m{.}(.)",
          "@_to": "$1"
         },
         {
          "@_from": "\\m{euro}\\m{euro}"
         }
        ]
       }
      ],
      "@_type": "simple"
     }
    ],
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_conformsTo": "45",
    "@_locale": "fr"
   }
  },
  "ja-Latn.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "version": {
     "@_number": "0.0.0"
    },
    "info": {
     "@_name": "Romaji (JIS)"
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "1 2 3 4 5 6 7 8 9 0 hyphen caret yen"
        },
        {
         "@_keys": "q w e r t y u i o p at open-square"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon colon close-square"
        },
        {
         "@_keys": "z x c v b n m comma period slash underscore"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "none"
      },
      {
       "row": [
        {
         "@_keys": "bang double-quote hash dollar percent amp apos open-paren close-paren 0 equal tilde pipe"
        },
        {
         "@_keys": "Q W E R T Y U I O P grave open-curly"
        },
        {
         "@_keys": "A S D F G H J K L plus asterisk close-curly"
        },
        {
         "@_keys": "Z X C V B N M open-angle close-angle question underscore"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifiers": "shift"
      }
     ],
     "@_formId": "jis"
    },
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "ja-Latn",
    "@_conformsTo": "45"
   }
  },
  "fr-t-k0-test.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard3": {
    "locales": {
     "locale": {
      "@_id": "br"
     }
    },
    "version": {
     "@_number": "1.0.0"
    },
    "info": {
     "@_name": "French Test AZERTY",
     "@_author": "Team Keyboard",
     "@_layout": "AZERTY",
     "@_indicator": "FR"
    },
    "displays": {
     "display": [
      {
       "@_output": "\\u{0300}",
       "@_display": "${grave}"
      },
      {
       "@_keyId": "symbol",
       "@_display": "@"
      },
      {
       "@_keyId": "numeric",
       "@_display": "123"
      }
     ],
     "displayOptions": {
      "@_baseCharacter": "x"
     }
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "45/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "shift",
       "@_layerId": "shift"
      },
      {
       "@_id": "numeric",
       "@_layerId": "numeric"
      },
      {
       "@_id": "symbol",
       "@_layerId": "symbol"
      },
      {
       "@_id": "base",
       "@_layerId": "base"
      },
      {
       "@_id": "extra",
       "@_gap": "true"
      },
      {
       "@_id": "enter",
       "@_gap": "true"
      },
      {
       "@_id": "u-grave",
       "@_output": "ü"
      },
      {
       "@_id": "e-grave",
       "@_output": "é"
      },
      {
       "@_id": "e-acute",
       "@_output": "è"
      },
      {
       "@_id": "c-cedilla",
       "@_output": "ç"
      },
      {
       "@_id": "a-grave",
       "@_output": "à"
      },
      {
       "@_id": "a-acute",
       "@_output": "á"
      },
      {
       "@_id": "a-caret",
       "@_output": "â"
      },
      {
       "@_id": "a-umlaut",
       "@_output": "ä"
      },
      {
       "@_id": "a-tilde",
       "@_output": "ã"
      },
      {
       "@_id": "a-ring",
       "@_output": "å"
      },
      {
       "@_id": "a-caron",
       "@_output": "ā"
      },
      {
       "@_id": "A-grave",
       "@_output": "À"
      },
      {
       "@_id": "A-acute",
       "@_output": "Á"
      },
      {
       "@_id": "A-caret",
       "@_output": "Â"
      },
      {
       "@_id": "A-umlaut",
       "@_output": "Ä"
      },
      {
       "@_id": "A-tilde",
       "@_output": "Ã"
      },
      {
       "@_id": "A-ring",
       "@_output": "Å"
      },
      {
       "@_id": "A-caron",
       "@_output": "Ā"
      },
      {
       "@_id": "bullet",
       "@_output": "•"
      },
      {
       "@_id": "umlaut",
       "@_output": "¨"
      },
      {
       "@_id": "super-2",
       "@_output": "²",
       "@_multiTapKeyIds": "sub-2 2"
      },
      {
       "@_id": "sub-2",
       "@_output": "₂"
      },
      {
       "@_id": "a",
       "@_flickId": "a",
       "@_output": "a",
       "@_longPressKeyIds": "a-grave a-caret a-acute a-umlaut a-tilde a-ring a-caron",
       "@_longPressDefaultKeyId": "a-caret"
      },
      {
       "@_id": "A",
       "@_flickId": "b",
       "@_output": "A",
       "@_longPressKeyIds": "A-grave A-caret A-acute A-umlaut a-tilde A-ring A-caron",
       "@_longPressDefaultKeyId": "A-caret"
      }
     ]
    },
    "flicks": {
     "flick": [
      {
       "flickSegment": [
        {
         "@_directions": "nw",
         "@_keyId": "A-grave"
        },
        {
         "@_directions": "nw se",
         "@_keyId": "A-acute"
        },
        {
         "@_directions": "e",
         "@_keyId": "A-caron"
        },
        {
         "@_directions": "s",
         "@_keyId": "numeric"
        }
       ],
       "@_id": "b"
      },
      {
       "flickSegment": [
        {
         "@_directions": "nw",
         "@_keyId": "a-grave"
        },
        {
         "@_directions": "nw se",
         "@_keyId": "a-acute"
        },
        {
         "@_directions": "e",
         "@_keyId": "a-caron"
        }
       ],
       "@_id": "a"
      }
     ]
    },
    "layers": [
     {
      "layer": [
       {
        "row": [
         {
          "@_keys": "super-2 amp e-grave double-quote apos open-paren hyphen e-acute underscore c-cedilla a-acute close-paren equal"
         },
         {
          "@_keys": "a z e r t y u i o p caret dollar"
         },
         {
          "@_keys": "q s d f g h j k l m u-grave asterisk"
         },
         {
          "@_keys": "open-angle w x c v b n comma semi-colon colon bang"
         },
         {
          "@_keys": "space"
         }
        ],
        "@_modifiers": "none"
       },
       {
        "row": [
         {
          "@_keys": "1 2 3 4 5 6 7 8 9 0 degree plus"
         },
         {
          "@_keys": "A Z E R T Y U I O P umlaut pound"
         },
         {
          "@_keys": "Q S D F G H J K L M percent micro"
         },
         {
          "@_keys": "close-angle W X C V B N question period slash section"
         },
         {
          "@_keys": "space"
         }
        ],
        "@_modifiers": "shift"
       }
      ],
      "@_formId": "iso"
     },
     {
      "layer": [
       {
        "row": [
         {
          "@_keys": "a z e r t y u i o p"
         },
         {
          "@_keys": "q s d f g h j k l m"
         },
         {
          "@_keys": "shift gap w x c v b n gap"
         },
         {
          "@_keys": "numeric extra space enter"
         }
        ],
        "@_id": "base"
       },
       {
        "row": [
         {
          "@_keys": "A Z E R T Y U I O P"
         },
         {
          "@_keys": "Q S D F G H J K L M"
         },
         {
          "@_keys": "base W X C V B N"
         },
         {
          "@_keys": "numeric extra space enter"
         }
        ],
        "@_id": "shift"
       },
       {
        "row": [
         {
          "@_keys": "1 2 3 4 5 6 7 8 9 0"
         },
         {
          "@_keys": "hyphen slash colon semi-colon open-paren close-paren dollar amp at double-quote"
         },
         {
          "@_keys": "symbol period comma question bang double-quote"
         },
         {
          "@_keys": "base extra space enter"
         }
        ],
        "@_id": "numeric"
       },
       {
        "row": [
         {
          "@_keys": "open-square close-square open-curly close-curly hash percent caret asterisk plus equal"
         },
         {
          "@_keys": "underscore backslash pipe tilde open-angle close-angle euro pound yen bullet"
         },
         {
          "@_keys": "numeric period comma question bang double-quote"
         },
         {
          "@_keys": "base extra space enter"
         }
        ],
        "@_id": "symbol"
       }
      ],
      "@_formId": "touch",
      "@_minDeviceWidth": "150"
     }
    ],
    "variables": {
     "string": [
      {
       "@_id": "grave",
       "@_value": "`"
      },
      {
       "@_id": "caret",
       "@_value": "^"
      },
      {
       "@_id": "umlaut",
       "@_value": "¨"
      },
      {
       "@_id": "tilde",
       "@_value": "~"
      }
     ],
     "set": [
      {
       "@_id": "vowel",
       "@_value": "a e i o u  A E I O U"
      },
      {
       "@_id": "graveVowel",
       "@_value": "à è ì ò ù  À È Ì Ò Ù"
      },
      {
       "@_id": "caretVowel",
       "@_value": "â ê î ô û  Â Ê Î Ô Û"
      },
      {
       "@_id": "umlautVowel",
       "@_value": "ä ë ï ö ü  Ä Ë Ï Ö Ü"
      },
      {
       "@_id": "spacing_accent",
       "@_value": "${grave} ${caret} ${umlaut} ${tilde}"
      }
     ]
    },
    "transforms": [
     {
      "transformGroup": [
       {
        "transform": [
         {
          "@_from": "${grave}($[vowel])",
          "@_to": "$[1:graveVowel]"
         },
         {
          "@_from": "${caret}($[vowel])",
          "@_to": "$[1:caretVowel]"
         },
         {
          "@_from": "${umlaut}($[vowel])",
          "@_to": "$[1:umlautVowel]"
         },
         {
          "@_from": "${umlaut}y",
          "@_to": "ÿ"
         },
         {
          "@_from": "${tilde}a",
          "@_to": "ã"
         },
         {
          "@_from": "${tilde}A",
          "@_to": "Ã"
         },
         {
          "@_from": "${tilde}n",
          "@_to": "ñ"
         },
         {
          "@_from": "${tilde}N",
          "@_to": "Ñ"
         },
         {
          "@_from": "${tilde}o",
          "@_to": "õ"
         },
         {
          "@_from": "${tilde}O",
          "@_to": "Õ"
         },
         {
          "@_from": "($[spacing_accent])",
          "@_to": "$1"
         }
        ]
       },
       {
        "reorder": [
         {
          "@_from": "\\u{1A60}",
          "@_order": "127"
         },
         {
          "@_from": "\\u{1A6B}",
          "@_order": "42"
         },
         {
          "@_from": "[\\u{1A75}-\\u{1A79}]",
          "@_order": "55"
         }
        ]
       }
      ],
      "@_type": "simple"
     }
    ],
    "@_xmlns": "https://schemas.unicode.org/cldr/45/keyboard3",
    "@_locale": "fr-t-k0-test",
    "@_conformsTo": "45"
   }
  }
 },
 "imports": {
  "keys-Zyyy-punctuation.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "amp",
      "@_output": "\\u{0026}"
     },
     {
      "@_id": "apos",
      "@_output": "'"
     },
     {
      "@_id": "asterisk",
      "@_output": "*"
     },
     {
      "@_id": "at",
      "@_output": "@"
     },
     {
      "@_id": "backslash",
      "@_output": "\\u{005C}"
     },
     {
      "@_id": "bang",
      "@_output": "!"
     },
     {
      "@_id": "caret",
      "@_output": "^"
     },
     {
      "@_id": "close-angle",
      "@_output": ">"
     },
     {
      "@_id": "close-curly",
      "@_output": "}"
     },
     {
      "@_id": "close-paren",
      "@_output": ")"
     },
     {
      "@_id": "close-square",
      "@_output": "]"
     },
     {
      "@_id": "colon",
      "@_output": ":"
     },
     {
      "@_id": "comma",
      "@_output": ","
     },
     {
      "@_id": "degree",
      "@_output": "°"
     },
     {
      "@_id": "double-quote",
      "@_output": "\\u{0022}"
     },
     {
      "@_id": "equal",
      "@_output": "="
     },
     {
      "@_id": "grave",
      "@_output": "`"
     },
     {
      "@_id": "hash",
      "@_output": "#"
     },
     {
      "@_id": "hyphen",
      "@_output": "-"
     },
     {
      "@_id": "micro",
      "@_output": "µ"
     },
     {
      "@_id": "not",
      "@_output": "¬"
     },
     {
      "@_id": "open-angle",
      "@_output": "\\u{003C}"
     },
     {
      "@_id": "open-curly",
      "@_output": "{"
     },
     {
      "@_id": "open-paren",
      "@_output": "("
     },
     {
      "@_id": "open-square",
      "@_output": "["
     },
     {
      "@_id": "percent",
      "@_output": "%"
     },
     {
      "@_id": "period",
      "@_output": "."
     },
     {
      "@_id": "pipe",
      "@_output": "|"
     },
     {
      "@_id": "plus",
      "@_output": "+"
     },
     {
      "@_id": "question",
      "@_output": "?"
     },
     {
      "@_id": "section",
      "@_output": "§"
     },
     {
      "@_id": "semi-colon",
      "@_output": ";"
     },
     {
      "@_id": "slash",
      "@_output": "/"
     },
     {
      "@_id": "tilde",
      "@_output": "~"
     },
     {
      "@_id": "underscore",
      "@_output": "_"
     }
    ]
   }
  },
  "keys-Latn-implied.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "gap",
      "@_gap": "true",
      "@_width": "1"
     },
     {
      "@_id": "space",
      "@_output": "\\u{0020}",
      "@_stretch": "true",
      "@_width": "1"
     },
     {
      "@_id": "0",
      "@_output": "0"
     },
     {
      "@_id": "1",
      "@_output": "1"
     },
     {
      "@_id": "2",
      "@_output": "2"
     },
     {
      "@_id": "3",
      "@_output": "3"
     },
     {
      "@_id": "4",
      "@_output": "4"
     },
     {
      "@_id": "5",
      "@_output": "5"
     },
     {
      "@_id": "6",
      "@_output": "6"
     },
     {
      "@_id": "7",
      "@_output": "7"
     },
     {
      "@_id": "8",
      "@_output": "8"
     },
     {
      "@_id": "9",
      "@_output": "9"
     },
     {
      "@_id": "A",
      "@_output": "A"
     },
     {
      "@_id": "B",
      "@_output": "B"
     },
     {
      "@_id": "C",
      "@_output": "C"
     },
     {
      "@_id": "D",
      "@_output": "D"
     },
     {
      "@_id": "E",
      "@_output": "E"
     },
     {
      "@_id": "F",
      "@_output": "F"
     },
     {
      "@_id": "G",
      "@_output": "G"
     },
     {
      "@_id": "H",
      "@_output": "H"
     },
     {
      "@_id": "I",
      "@_output": "I"
     },
     {
      "@_id": "J",
      "@_output": "J"
     },
     {
      "@_id": "K",
      "@_output": "K"
     },
     {
      "@_id": "L",
      "@_output": "L"
     },
     {
      "@_id": "M",
      "@_output": "M"
     },
     {
      "@_id": "N",
      "@_output": "N"
     },
     {
      "@_id": "O",
      "@_output": "O"
     },
     {
      "@_id": "P",
      "@_output": "P"
     },
     {
      "@_id": "Q",
      "@_output": "Q"
     },
     {
      "@_id": "R",
      "@_output": "R"
     },
     {
      "@_id": "S",
      "@_output": "S"
     },
     {
      "@_id": "T",
      "@_output": "T"
     },
     {
      "@_id": "U",
      "@_output": "U"
     },
     {
      "@_id": "V",
      "@_output": "V"
     },
     {
      "@_id": "W",
      "@_output": "W"
     },
     {
      "@_id": "X",
      "@_output": "X"
     },
     {
      "@_id": "Y",
      "@_output": "Y"
     },
     {
      "@_id": "Z",
      "@_output": "Z"
     },
     {
      "@_id": "a",
      "@_output": "a"
     },
     {
      "@_id": "b",
      "@_output": "b"
     },
     {
      "@_id": "c",
      "@_output": "c"
     },
     {
      "@_id": "d",
      "@_output": "d"
     },
     {
      "@_id": "e",
      "@_output": "e"
     },
     {
      "@_id": "f",
      "@_output": "f"
     },
     {
      "@_id": "g",
      "@_output": "g"
     },
     {
      "@_id": "h",
      "@_output": "h"
     },
     {
      "@_id": "i",
      "@_output": "i"
     },
     {
      "@_id": "j",
      "@_output": "j"
     },
     {
      "@_id": "k",
      "@_output": "k"
     },
     {
      "@_id": "l",
      "@_output": "l"
     },
     {
      "@_id": "m",
      "@_output": "m"
     },
     {
      "@_id": "n",
      "@_output": "n"
     },
     {
      "@_id": "o",
      "@_output": "o"
     },
     {
      "@_id": "p",
      "@_output": "p"
     },
     {
      "@_id": "q",
      "@_output": "q"
     },
     {
      "@_id": "r",
      "@_output": "r"
     },
     {
      "@_id": "s",
      "@_output": "s"
     },
     {
      "@_id": "t",
      "@_output": "t"
     },
     {
      "@_id": "u",
      "@_output": "u"
     },
     {
      "@_id": "v",
      "@_output": "v"
     },
     {
      "@_id": "w",
      "@_output": "w"
     },
     {
      "@_id": "x",
      "@_output": "x"
     },
     {
      "@_id": "y",
      "@_output": "y"
     },
     {
      "@_id": "z",
      "@_output": "z"
     }
    ]
   }
  },
  "scanCodes-implied.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "forms": {
    "form": [
     {
      "scanCodes": [
       {
        "@_codes": "29 02 03 04 05 06 07 08 09 0A 0B 0C 0D"
       },
       {
        "@_codes": "10 11 12 13 14 15 16 17 18 19 1A 1B 2B"
       },
       {
        "@_codes": "1E 1F 20 21 22 23 24 25 26 27 28"
       },
       {
        "@_codes": "2C 2D 2E 2F 30 31 32 33 34 35"
       },
       {
        "@_codes": "39"
       }
      ],
      "@_id": "us"
     },
     {
      "scanCodes": [
       {
        "@_codes": "29 02 03 04 05 06 07 08 09 0A 0B 0C 0D"
       },
       {
        "@_codes": "10 11 12 13 14 15 16 17 18 19 1A 1B"
       },
       {
        "@_codes": "1E 1F 20 21 22 23 24 25 26 27 28 2B"
       },
       {
        "@_codes": "56 2C 2D 2E 2F 30 31 32 33 34 35"
       },
       {
        "@_codes": "39"
       }
      ],
      "@_id": "iso"
     },
     {
      "scanCodes": [
       {
        "@_codes": "29 02 03 04 05 06 07 08 09 0A 0B 0C 0D"
       },
       {
        "@_codes": "10 11 12 13 14 15 16 17 18 19 1A 1B"
       },
       {
        "@_codes": "1E 1F 20 21 22 23 24 25 26 27 28 2B"
       },
       {
        "@_codes": "56 2C 2D 2E 2F 30 31 32 33 34 35 73"
       },
       {
        "@_codes": "39"
       }
      ],
      "@_id": "abnt2"
     },
     {
      "scanCodes": [
       {
        "@_codes": "29 02 03 04 05 06 07 08 09 0A 0B 0C 0D 7D"
       },
       {
        "@_codes": "10 11 12 13 14 15 16 17 18 19 1A 1B"
       },
       {
        "@_codes": "1E 1F 20 21 22 23 24 25 26 27 28 2B"
       },
       {
        "@_codes": "2C 2D 2E 2F 30 31 32 33 34 35 73"
       },
       {
        "@_codes": "39"
       }
      ],
      "@_id": "jis"
     },
     {
      "scanCodes": [
       {
        "@_codes": "29 02 03 04 05 06 07 08 09 0A 0B 0C 0D 2B"
       },
       {
        "@_codes": "10 11 12 13 14 15 16 17 18 19 1A 1B"
       },
       {
        "@_codes": "1E 1F 20 21 22 23 24 25 26 27 28"
       },
       {
        "@_codes": "2C 2D 2E 2F 30 31 32 33 34 35"
       },
       {
        "@_codes": "39"
       }
      ],
      "@_id": "ks"
     }
    ]
   }
  },
  "keys-Zyyy-currency.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "dollar",
      "@_output": "$"
     },
     {
      "@_id": "euro",
      "@_output": "€"
     },
     {
      "@_id": "pound",
      "@_output": "£"
     },
     {
      "@_id": "yen",
      "@_output": "¥"
     },
     {
      "@_id": "cruzeiro",
      "@_output": "₢"
     },
     {
      "@_id": "cent",
      "@_output": "¢"
     }
    ]
   }
  }
 }
}