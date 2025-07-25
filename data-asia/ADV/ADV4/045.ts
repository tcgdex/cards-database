import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Claydol",
         ja: "クレイドル",
         fr: "Argile",
         de: "Claydol",
         es: "Arcilla",
         it: "Claydol",
         pt: "Claydol",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [344],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Primal Pull",
            ja: "プライマルプル",
            fr: "Traction primitive",
            de: "Urzug",
            es: "Tirón primario",
            it: "Pullo primordiale",
            pt: "Puxão primal",
          },
          effect: {
            en: "As long as Claydol is your Active PokÃ©mon, each player's Evolved PokÃ©mon pays Colorless more Energy to use its attacks.",
            ja: "Claydolがあなたのアクティブなポカモンである限り、各プレイヤーの進化したPokã©Monは、攻撃を使用するために無色のより多くのエネルギーを支払います。",
            fr: "Tant que Claydol est votre poké actif, le poké évolué de chaque joueur paie plus d'énergie incolore pour utiliser ses attaques.",
            de: "Solange Claydol Ihr aktiver Poké Mon Mon ist, zahlt der entwickelte Poké Moned jedes Spieler farbloser Energie für die Verwendung seiner Angriffe.",
            es: "Mientras Claydol sea su Poké Mon activo, el Poké Mon evolucionado de cada jugador paga más incoloro más energía para usar sus ataques.",
            it: "Finché Claydol è il tuo poké attivo, il poké evoluto di ogni giocatore paga incolore più energia per usare i suoi attacchi.",
            pt: "Enquanto o Claydol for o seu Poké de Mon ativo, o Poké -Mon evoluído de cada jogador paga mais energia para usar seus ataques.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Muddy Eye",
            ja: "泥の目",
            fr: "Œil boueux",
            de: "Schlammiges Auge",
            es: "Ojo fangoso",
            it: "Occhio fangoso",
            pt: "Olho lamacento",
          },
          effect: {
            en: "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokemon.",
            ja: "クレイドールと防御ポケモンに接続された基本エネルギーカードの数を10回ダメージします。",
            fr: "Fait 10 dégâts le nombre de cartes d'énergie de base attachées à Claydol et au Pokémon en défense.",
            de: "Schaden Sie 10 Schadenszeiten der Anzahl der an Claydol und dem verteidigenden Pokemon befestigten Basiskarten.",
            es: "Hace 10 tiempos de daño el número de tarjetas de energía básicas unidas a Claydol y el Pokémon defensor.",
            it: "Fa 10 danni volte il numero di carte di energia di base collegate a Claydol e il Pokemon in difesa.",
            pt: "10 danos vezes o número de cartões de energia básicos anexados ao Claydol e ao Pokémon defensivo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
