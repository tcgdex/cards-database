import {Card} from "../../../interfaces"
import Set from "../PCG5"

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

      rarity: "Rare",
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
            en: "Confusion Wave",
            ja: "混乱波",
            fr: "Vague de confusion",
            de: "Verwirrungswelle",
            es: "Ola de confusión",
            it: "Onda di confusione",
            pt: "Onda de confusão",
          },
          effect: {
            en: "Both Wynaut and the Defending Pokemon are now Confused.",
            ja: "Wynautと防御ポケモンの両方が混乱しています。",
            fr: "Wynaut et le Pokémon en défense sont maintenant confus.",
            de: "Sowohl Wynaut als auch das verteidigende Pokémon sind jetzt verwirrt.",
            es: "Tanto Wynaut como el Pokémon defensor ahora están confundidos.",
            it: "Sia Wynaut che i Pokemon in carica sono ora confusi.",
            pt: "Tanto Wynaut quanto os Pokémon defensores agora estão confusos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
