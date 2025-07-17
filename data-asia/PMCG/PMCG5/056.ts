import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Rattata",
         ja: "Surge's Rattata中t",
         fr: "Rattata du lieutenant de surtension",
         de: "Lt. Surges Rattata",
         es: "Rattata del teniente Surge",
         it: "Rattata del tenente Surge",
         pt: "Rattata do tenente Surge",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [19],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Focus Energy",
            ja: "フォーカスエネルギー",
            fr: "Concentrer l'énergie",
            de: "Konzentrationsenergie",
            es: "Energía de enfoque",
            it: "Focus Energy",
            pt: "Foco em energia",
          },
          effect: {
            en: "During your next turn, Lt. Surge's Rattata's Quick Attack's base damage is doubled.",
            ja: "次のターン中、サージ中佐のラッタタクイック攻撃ベースの損傷は2倍になります。",
            fr: "Au cours de votre prochain virage, le lieutenant de la base des dégâts de base d'attaque de Rattata du Lt. Surge est doublé.",
            de: "Während Ihrer nächsten Kurve wird der Rattata Quick Attack Base -Schaden von Lt. Surge verdoppelt.",
            es: "Durante su próximo turno, se duplica el daño de la base de ataque rápido de Rattata del teniente Surge.",
            it: "Durante il tuo prossimo turno, il danno da base di attacco rapido Rattata del tenente Surge è raddoppiato.",
            pt: "Durante o seu próximo turno, o dano rápido da base de ataques rápidos do tenente Surge é dobrado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
