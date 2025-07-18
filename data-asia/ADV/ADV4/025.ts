import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Milotic",
         ja: "ミロティック",
         fr: "Milotique",
         de: "Milotisch",
         es: "Milótico",
         it: "Milotico",
         pt: "Milótico",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [350],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Healing Shower",
            ja: "ヒーリングシャワー",
            fr: "Douche de guérison",
            de: "Heilungsdusche",
            es: "Ducha curativa",
            it: "Doccia curativa",
            pt: "Chuveiro de cura",
          },
          effect: {
            en: "Once during your turn, when you play Milotic from your hand to evolve 1 of your PokÃ©mon, you may remove all damage counters from all of your PokÃ©mon and your opponent's PokÃ©mon (excluding PokÃ©mon-ex).",
            ja: "ターン中に、手からミロティックをプレイしてPokã©Monの1つを進化させると、すべてのPokã©Monと対戦相手のPokã©Mon（Pokã©Mon-Exを除く）からすべてのダメージカウンターを削除できます。",
            fr: "Une fois pendant votre tour, lorsque vous jouez au milotique de votre main pour évoluer 1 de votre poké, vous pouvez supprimer tous les compteurs de dégâts de tous vos pokã © lun et votre adversaire Pokã © Mon (à l'exclusion de Pokã © Mon-EX).",
            de: "Sobald Sie während Ihres Zuges milotisch aus Ihrer Hand spielen, um 1 Ihrer Poké Mon Mon Mon Mon zu entwickeln, können Sie alle Schadenszähler von all Ihrem Poké Mon und dem Poké Mon (mit Ausnahme von Poké Mon-EX) und dem Poké Mons Ihres Gegners) entfernen.",
            es: "Una vez durante su turno, cuando juegas milótico desde tu mano para evolucionar 1 de tu Poké Mon, puedes eliminar todos los contadores de daño de todos tus Poké Mon y el Poké de tu oponente (excluyendo Pokã © Mon-Ex).",
            it: "Una volta durante il tuo turno, quando giochi milotico dalla tua mano per evolvere 1 del tuo poké mon, puoi rimuovere tutti i contatori di danno da tutto il tuo poké mon e il poké mon (escluso il pokã © mon-ex).",
            pt: "Uma vez durante o seu turno, quando você toca milótico da sua mão para evoluir 1 do seu Poké Mon, você pode remover todos os contadores de danos de todos os seus Poké Mon e o Poké Mon do seu oponente (excluindo o Poké Mon-Ex).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Wave Splash",
            ja: "波のスプラッシュ",
            fr: "Vague de vagues",
            de: "Wellenspritzer",
            es: "Salpicadería",
            it: "Splash d'onda",
            pt: "Splash de onda",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Distorted Wave",
            ja: "歪んだ波",
            fr: "Vague déformée",
            de: "Verzerrte Welle",
            es: "Onda distorsionada",
            it: "Onda distorta",
            pt: "Onda distorcida",
          },
          effect: {
            en: "Before doing damage, remove 3 damage counters from the Defending Pokemon (all if there are less than 3).",
            ja: "ダメージを与える前に、防御ポケモンから3つのダメージカウンターを削除します（3つ未満の場合はすべて）。",
            fr: "Avant de faire des dégâts, retirez 3 compteurs de dégâts du Pokémon en défense (tout s'il y en a moins de 3).",
            de: "Entfernen Sie vor Schäden 3 Schadenszähler aus dem verteidigenden Pokemon (alle, wenn es weniger als 3 gibt).",
            es: "Antes de hacer daño, elimine 3 contadores de daño del Pokémon defensor (todo si hay menos de 3).",
            it: "Prima di fare danni, rimuovere 3 contatori di danno dal Pokemon in difesa (tutto se ce ne sono meno di 3).",
            pt: "Antes de causar danos, remova 3 contadores de danos do Pokémon atual (tudo se houver menos de 3).",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
