import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Igglybuff",
         ja: "Igglybuff",
         fr: "Igglybuff",
         de: "IgglyBuff",
         es: "Igglybuff",
         it: "Igglybuff",
         pt: "IgglyBuff",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [174],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Hover Lift",
            ja: "ホバーリフト",
            fr: "Volant",
            de: "Schweber Lift",
            es: "Ascensor",
            it: "Sollevamento del mouse",
            pt: "Elevador pairar",
          },
          effect: {
            en: "You pay Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff. Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff) and remove all damage counters from Igglybuff.",
            ja: "Jigglypuff、Wigglytuff、Wigglytuff ex、およびIgglybuffを支払います。ターン中（攻撃の前に）一度、Jigglypuffを手からIgglybuff（これは進化するIgglybuffとしてカウント）に入れ、Igglybuffからすべてのダメージカウンターを削除することができます。",
            fr: "Vous payez Jigglypuff, Wigglytuff, Wigglytuff ex et Igglybuff. Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Jigglypuff de votre main sur Igglybuff (cela compte comme igglybuff en évolution) et retirer tous les compteurs de dégâts d'Igglybuff.",
            de: "Sie zahlen Jigglypuff, Wigglytuff, Wigglytuff Ex und IgglyBuff. Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Jigglypuff aus Ihrer Hand auf IgglyBuff legen (dies zählt als sich entwickelnde IGGLYBUFF) und alle Schadenszähler von IGGLYBUFF entfernen.",
            es: "Pagas Jigglypuff, Wigglytuff, Wigglytuff Ex e Igglybuff. Una vez durante su turno (antes de su ataque), puede colocar Jigglypuff de su mano en Igglybuff (esto cuenta como IgGlybuff en evolución) y eliminar todos los contadores de daño de Igglybuff.",
            it: "Paghi jigglypuff, wigglytuff, wigglytuff ex e igglybuff. Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Jigglypuff dalla tua mano su igglybuff (questo conta come igglybuff in evoluzione) e rimuovere tutti i contatori di danno da igglybuff.",
            pt: "Você paga Jigglypuff, Wigglytuff, Wigglytuff Ex e IgglyBuff. Uma vez durante o seu turno (antes do seu ataque), você pode colocar o Jigglypuff da sua mão no IgglyBuff (isso conta como evoluindo o IgglyBuff) e remover todos os contadores de danos do IgglyBuff.",
          },
      }],

      attacks: [
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
