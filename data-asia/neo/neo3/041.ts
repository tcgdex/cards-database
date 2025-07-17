import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Piloswine",
         ja: "ピロスワイン",
         fr: "Piloswine",
         de: "Piloswine",
         es: "Piloswine",
         it: "Piloswine",
         pt: "Piloswine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [221],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Nap",
            ja: "昼寝",
            fr: "Somme",
            de: "Nickerchen",
            es: "Siesta",
            it: "Pisolino",
            pt: "Sesta",
          },
          effect: {
            en: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
            ja: "Piloswineから3つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Retirez 3 compteurs de dégâts de Piloswine. S'il a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie 3 Schadenszähler von Piloswine. Wenn es weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Retire 3 contadores de daño de Piloswine. Si tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere 3 contatori di danno da Piloswine. Se ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Remova 3 contadores de danos de Piloswine. Se tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "High-Speed Charge",
            ja: "高速電荷",
            fr: "Charge à grande vitesse",
            de: "Hochgeschwindigkeitsladung",
            es: "Carga de alta velocidad",
            it: "Carica ad alta velocità",
            pt: "Carga de alta velocidade",
          },
          effect: {
            en: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
            ja: "Piloswineはそれ自体に30のダメージを与えます。 Piloswineは、次のターン中にこの攻撃を使用できません。",
            fr: "Piloswine fait 30 dégâts à lui-même. Piloswine ne peut pas utiliser cette attaque pendant votre prochain tour.",
            de: "Piloswine schädigt sich 30. Piloswine kann diesen Angriff in Ihrer nächsten Kurve nicht anwenden.",
            es: "Piloswine hace 30 daños a sí mismo. Piloswine no puede usar este ataque durante su próximo turno.",
            it: "Piloswine fa 30 danni a se stesso. Piloswine non può usare questo attacco durante il tuo prossimo turno.",
            pt: "Piloswine causa 30 danos a si mesmo. Piloswine não pode usar esse ataque durante o próximo turno.",
          },
          damage: 80,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
