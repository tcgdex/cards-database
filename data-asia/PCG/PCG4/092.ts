import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Murkrow",
         ja: "マークロウ",
         fr: "Sobre",
         de: "Murkrow",
         es: "Turbio",
         it: "Murkrow",
         pt: "MURKROW",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [198],
      hp: 70,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Night Song",
            ja: "ナイトソング",
            fr: "Chanson de nuit",
            de: "Nachtlied",
            es: "Canción nocturna",
            it: "Canzone notturna",
            pt: "Música noturna",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. The new Defending Pokemon is now Asleep.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは今眠っています。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Le nouveau Pokémon défendant est maintenant endormi.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Das neue verteidigende Pokemon schläft jetzt.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. El nuevo Pokémon defensor ahora está dormido.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Il nuovo Pokemon in carica è ora addormentato.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar. O novo Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Plunder",
            ja: "略奪",
            fr: "Pillage",
            de: "Plunder",
            es: "Saquear",
            it: "Saccheggiare",
            pt: "Pilhagem",
          },
          effect: {
            en: "Before doing damage, discard all Trainer cards attached to the Defending Pokemon.",
            ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
            fr: "Avant de faire des dégâts, jetez toutes les cartes d'entraîner attachées au Pokémon en défense.",
            de: "Bevor Sie Schaden anrichten, entsorgen Sie alle Trainerkarten, die an das verteidigende Pokémon angeschlossen sind.",
            es: "Antes de hacer daño, deseche todas las tarjetas de entrenador adjuntas al Pokémon defensor.",
            it: "Prima di fare danni, scartare tutte le carte dell'allenatore collegate al Pokemon in carica.",
            pt: "Antes de causar danos, descarte todos os cartões de treinador anexados ao Pokémon atual.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
