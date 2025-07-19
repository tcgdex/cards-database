import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Glalie",
         ja: "グラリー",
         fr: "Gllay",
         de: "Glalie",
         es: "Glalie",
         it: "Glalie",
         pt: "Glalie",
      },


      category: "Pokemon",
      dexId: [362],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Synergy Effect",
            ja: "相乗効果",
            fr: "Effet de synergie",
            de: "Synergieeffekt",
            es: "Efecto sinergia",
            it: "Effetto sinergia",
            pt: "Efeito de sinergia",
          },
          effect: {
            en: "If 76 is in play, any damage done to Glalie by attacks from your opponent's PokÃ©mon is reduced by 30 (after applying Weakness and Resistance).",
            ja: "76が機能している場合、相手のPokã©Monからの攻撃によってGlalieに与えられた損害は30減少します（脱力感と抵抗を適用した後）。",
            fr: "Si 76 est en jeu, tout dommage causé à GLALIE par des attaques du pokã © Mon de votre adversaire est réduit de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Wenn 76 im Spiel ist, wird alle Schäden an Glalie durch Angriffe aus dem Pokémon Ihres Gegners um 30 reduziert (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Si 76 está en juego, cualquier daño causado a Glalie por ataques de Poké Mon de tu oponente se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Se 76 è in gioco, qualsiasi danno fatto a Glalie dagli attacchi del poké del tuo avversario è ridotto di 30 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Se 76 estiver em jogo, qualquer dano causado a Glalie por ataques do Poké Mon do seu oponente é reduzido em 30 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Powder Snow",
            ja: "パウダースノー",
            fr: "Neige de poudre",
            de: "Pulverschnee",
            es: "Nieve en polvo",
            it: "Neve in polvere",
            pt: "Neve em pó",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Glalie does 10 damage to itself.",
            ja: "Glalieはそれ自体に10ダメージを与えます。",
            fr: "GLALIE fait 10 dégâts à lui-même.",
            de: "Glalie schädigt sich 10.",
            es: "Glalie hace 10 daños a sí mismo.",
            it: "Glalie fa 10 danni a se stessa.",
            pt: "Glalie causa 10 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
