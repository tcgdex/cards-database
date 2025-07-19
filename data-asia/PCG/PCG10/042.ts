import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Wynaut",
         ja: "wynaut",
         fr: "Wynaut",
         de: "Wynaut",
         es: "Wynaut",
         it: "Wynaut",
         pt: "Wynaut",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [360],
      hp: 50,
      types: ["Psychic"],
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
            en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.",
            ja: "ターン中に（攻撃の前に）、Wobbuffetを手からWynaut（これは進化するWynautとしてカウント）に置き、Wynautからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Wobbuffet de votre main sur Wynaut (cela compte comme en évolution de Wynaut) et retirer tous les compteurs de dégâts de Wynaut.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Wobbuffet aus Ihrer Hand auf Wynaut legen (dies zählt als sich entwickelnde Wynaut) und alle Schadenszähler von WYNAUT entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar Wobbuffet de su mano en Wynaut (esto cuenta como Wynaut en evolución) y eliminar todos los contadores de daño de Wynaut.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Wobbuffet dalla mano su Wynaut (questo conta come Wynaut in evoluzione) e rimuovere tutti i contatori di danno da Wynaut.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Wobbuffet da sua mão em Wynaut (isso conta como evoluindo Wynaut) e remover todos os contadores de danos de Wynaut.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Wynaut.",
            ja: "ダメージ数のダメージ数は、Wynautのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Wynaut.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Wynaut.",
            es: "Hace 10 veces el número de contadores de daño en Wynaut.",
            it: "Fa 10 danni volte il numero di contatori di danno su Wynaut.",
            pt: "10 danos vezes o número de contadores de danos em Wynaut.",
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
