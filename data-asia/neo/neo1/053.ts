import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Phanpy",
         ja: "ファンピー",
         fr: "Phanpie",
         de: "Phanpy",
         es: "Fanpía",
         it: "Fanpy",
         pt: "Phanpy",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [231],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Endure",
            ja: "耐える",
            fr: "Endurer",
            de: "Aushalten",
            es: "Perdurar",
            it: "Sopportare",
            pt: "Aguentar",
          },
          effect: {
            en: "Flip a coin. If heads, then if, during your opponent's next turn, Phanpy would be Knocked Out by an attack, Phanpy isn't Knocked Out and its remaining HP become 10 instead.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ファンピーが攻撃によってノックアウトされた場合、ファンピーはノックアウトされず、代わりに残りのHPが10になります。",
            fr: "Retourner une pièce. Si les têtes, alors, si, lors du prochain tour de votre adversaire, Phanpy serait assommée par une attaque, Phanpy n'est pas éliminé et ses HP restants deviendront à la place.",
            de: "Eine Münze drehen. Wenn die Köpfe, wenn in der nächsten Runde Ihres Gegners, Phanpy durch einen Angriff ausgeschaltet wird, wird Phanpy nicht ausgeschlagen und seine verbleibende HP wird stattdessen 10.",
            es: "Voltea una moneda. Si se dirige, si, durante el próximo turno de tu oponente, Phanpy sería noqueada por un ataque, Phanpy no seque y su HP restante se convierte en 10.",
            it: "Capovolgi una moneta. Se le teste, quindi, se, durante il prossimo turno del tuo avversario, Fanpy verrebbe eliminato da un attacco, Fanpy non viene eliminato e invece i suoi HP rimanenti diventano 10.",
            pt: "Vire uma moeda. Se as cabeças, se, durante o próximo turno do seu oponente, Phanpy seria nocauteado por um ataque, Phanpy não for nocauteado e o HP restante se tornará 10.",
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
