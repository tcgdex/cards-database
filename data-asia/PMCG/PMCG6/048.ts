import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Slowbro",
         ja: "サブリナのスローブロ",
         fr: "Slowbro de Sabrina",
         de: "Sabrinas Slowbro",
         es: "Sabrina's Slowbro",
         it: "Sabrina's Slowbro",
         pt: "Sabrina's Slowbro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [80],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Naptime",
            ja: "昼寝",
            fr: "Sable",
            de: "Naptime",
            es: "Sibrad",
            it: "Naptime",
            pt: "Naptime",
          },
          effect: {
            en: "Flip a coin. If heads, remove 3 damage counters from Sabrina's Slowbro and Sabrina's Slowbro is now Asleep. If Sabrina's Slowbro has fewer damage counters than that, remove all of them.",
            ja: "コインをひっくり返します。頭の場合、サブリナのスローブロとサブリナのスローブロから3つのダメージカウンターを削除しました。 SabrinaのSlowbroのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
            fr: "Retourner une pièce. Si les têtes, retirez 3 compteurs de dégâts de Slowbro de Sabrina et Slowbro de Sabrina est maintenant endormi. Si Slowbro de Sabrina a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Eine Münze drehen. Wenn Köpfe, entfernen Sie 3 Schadenszähler aus Sabrinas Slowbro und Sabrinas Slowbro schläft jetzt. Wenn Sabrinas Slowbro weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Voltea una moneda. Si se dirige, elimine 3 contadores de daño de Slowbro de Sabrina y Slowbro de Sabrina ahora está dormido. Si el Slowbro de Sabrina tiene menos contadores de daño que eso, retírelos todos.",
            it: "Capovolgi una moneta. Se le teste, rimuovi 3 contatori di danno dal Slowbro di Sabrina e Slowbro di Sabrina è ora addormentato. Se Slowbro di Sabrina ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Vire uma moeda. Se as cabeças, remova 3 contadores de danos dos Slowbro de Sabrina e Slowbro de Sabrina agora está dormindo. Se o Slowbro de Sabrina tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Screaming Headbutt",
            ja: "叫ぶヘッドバット",
            fr: "Cris",
            de: "Schreiender Kopfbutt",
            es: "Gritando cabeza",
            it: "Headbutt urlante",
            pt: "Screando de cabeça",
          },
          effect: {
            en: "You can't use this attack during your next turn.",
            ja: "次のターン中にこの攻撃を使用することはできません。",
            fr: "Vous ne pouvez pas utiliser cette attaque pendant votre prochain tour.",
            de: "Sie können diesen Angriff in Ihrer nächsten Kurve nicht verwenden.",
            es: "No puedes usar este ataque durante tu próximo turno.",
            it: "Non puoi usare questo attacco durante il tuo prossimo turno.",
            pt: "Você não pode usar esse ataque durante o próximo turno.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
