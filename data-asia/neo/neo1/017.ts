import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Heracross",
         ja: "ヘラクロス",
         fr: "Hélicoïdal",
         de: "Heracross",
         es: "Heracross",
         it: "Eracross",
         pt: "Heracross",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [214],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Final Blow",
            ja: "最後の打撃",
            fr: "Coup final",
            de: "Schlussblase",
            es: "Golpe final",
            it: "Colpo finale",
            pt: "Golpe final",
          },
          effect: {
            en: "If Heracross's remaining HP are 20 or less, you may make its Megahorn attack's base damage 120 instead of 60. This power can't be used if Heracross is Asleep, Confused, or Paralyzed.",
            ja: "Heracrossの残りのHPが20以下の場合、Megahorn Attackのベースダメージ120ではなく120になる可能性があります。Heracrossが眠り、混乱し、または麻痺している場合、このパワーは使用できません。",
            fr: "Si les HP restants d'Héracross ont 20 ans ou moins, vous pouvez faire des dégâts de base de la base de l'attaque de Megahorn 120 au lieu de 60. Ce pouvoir ne peut pas être utilisé si Heracross est endormi, confus ou paralysé.",
            de: "Wenn Heracross 'verbleibende HP 20 oder weniger beträgt, können Sie den Basisschaden von Megahorn Attack 120 anstelle von 60 machen. Diese Kraft kann nicht angewendet werden, wenn Heracross schläft, verwirrt oder gelähmt ist.",
            es: "Si el HP restante de Heracross tiene 20 o menos, puede causar el daño base de su ataque de megahorn 120 en lugar de 60. Este poder no se puede usar si Heracross está dormido, confundido o paralizado.",
            it: "Se gli HP rimanenti di Heracross sono 20 o meno, potresti rendere il danno base di MEGAHORN Attack 120 invece di 60. Questo potere non può essere usato se Heracross è addormentato, confuso o paralizzato.",
            pt: "Se a HP restante de Heracross for 20 ou menos, você pode causar o dano básico de seu ataque de megahorn 120 em vez de 60. Esse poder não pode ser usado se Heracross estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Megahorn",
            ja: "メガホーン",
            fr: "Mégahorn",
            de: "Megahorn",
            es: "Megahorn",
            it: "Megahorn",
            pt: "Megahorn",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
