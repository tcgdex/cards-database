import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Tyrogue",
         ja: "タイログ",
         fr: "Tyrogue",
         de: "Tyrogue",
         es: "Tirógeno",
         it: "Tylogue",
         pt: "Tyrogue",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [236],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Baby Evolution",
            ja: "赤ちゃんの進化",
            fr: "Évolution de bébé",
            de: "Babyentwicklung",
            es: "Evolución del bebé",
            it: "Evoluzione del bambino",
            pt: "Evolução do bebê",
          },
          effect: {
            en: "Once during your turn (before your attack), you may put Hitmonlee, Hitmonchan, or Hitmontop from your hand onto Tyrogue (this counts as evolving Tyrogue) and remove all damage counters from Tyrogue.",
            ja: "ターン中（攻撃の前に）一度、Hitmonlee、Hitmonchan、またはHitmontopを手からティログに置き（これは進化するタイログとしてカウントされます）、Tyrogueからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Hitmonlee, Hitmonchan ou Hitmontop de votre main sur Tyrogue (cela compte comme un tyrogue en évolution) et retirer tous les compteurs de dégâts de Tyrogue.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Hitmonlee, Hitmonchan oder Hitmontop aus Ihrer Hand auf Tyroge (dies als sich entwickelnde Tyrogue) setzen und alle Schadenszähler aus Tyroge entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede poner a Hitmonlee, Hitmonchan o Hitmontop de su mano sobre el Tirogue (esto cuenta como el Tyrogue en evolución) y eliminar todos los contadores de daño del Tyrogue.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Hitmonlee, Hitmonchan o HitMontop dalla tua mano a Tylogue (questo conta come Tylogue in evoluzione) e rimuovere tutti i contatori di danno da Tylogue.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar o Hitmonlee, Hitmonchan ou Hitmontop da sua mão para Tyrogue (isso conta como Tyrogue em evolução) e remova todos os contadores de danos do Tyrogue.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Desperate Punch",
            ja: "必死のパンチ",
            fr: "Coup de poing désespéré",
            de: "Verzweifelter Schlag",
            es: "Golpe desesperado",
            it: "Punch disperato",
            pt: "Soco desesperado",
          },
          effect: {
            en: "Does 10 damage times the number of Pokemon in play your opponent has more than you.",
            ja: "10回ダメージを与えます。",
            fr: "Fait 10 dégâts de temps le nombre de Pokémon en jeu votre adversaire a plus que vous.",
            de: "Hat 10 Schadenszeiten die Anzahl der Pokemon im Spiel, das Ihr Gegner mehr hat als Sie.",
            es: "Hace 10 veces que el número de Pokémon en juego tu oponente tiene más que tú.",
            it: "Fa 10 danni volte il numero di pokemon in gioco il tuo avversario ha più di te.",
            pt: "10 danos vezes o número de Pokemon no jogo seu oponente tem mais do que você.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
