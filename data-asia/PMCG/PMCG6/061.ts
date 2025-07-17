import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Machamp",
         ja: "ジョバンニのマチャンプ",
         fr: "Machamp de Giovanni",
         de: "Giovannis Machamp",
         es: "Machamp de Giovanni",
         it: "Giovanni's Machamp",
         pt: "Machamp de Giovanni",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 100,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Fortitude",
            ja: "不屈の精神",
            fr: "Courage",
            de: "Kraft",
            es: "Fortaleza",
            it: "Fortezza",
            pt: "Fortitude",
          },
          effect: {
            en: "If Giovanni's Machamp would be Knocked Out by an opponent's attack, flip a coin. If heads, Giovanni's Machamp is not Knocked Out and its remaining HP become 10 instead. This power can't be used if Giovanni's Machamp is already Asleep, Confused, or Paralyzed.",
            ja: "GiovanniのMachampが相手の攻撃によってノックアウトされる場合は、コインをひっくり返します。ヘッドの場合、ジョバンニのマチャンプはノックアウトされず、代わりに残りのHPが10になります。ジョバンニのマチャンプがすでに眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Si le machamp de Giovanni était assommé par l'attaque d'un adversaire, retournez une pièce. Si les têtes, le machamp de Giovanni n'est pas éliminé et ses HP restants deviennent 10 à la place. Ce pouvoir ne peut pas être utilisé si le machamp de Giovanni est déjà endormi, confus ou paralysé.",
            de: "Wenn Giovannis Machamp durch den Angriff eines Gegners ausgeschaltet wird, drehen Sie eine Münze. Wenn Köpfe, wird Giovannis Machamp nicht ausgeschlagen und seine verbleibende HP wird stattdessen 10. Diese Kraft kann nicht verwendet werden, wenn Giovannis Machamp bereits schläft, verwirrt oder gelähmt ist.",
            es: "Si el Machamp de Giovanni fuera noqueado por el ataque de un oponente, voltee una moneda. Si se dirige, el Machamp de Giovanni no se elimina y su HP restante se convierte en 10 en su lugar. Este poder no se puede usar si el Machamp de Giovanni ya está dormido, confundido o paralizado.",
            it: "Se il machamp di Giovanni fosse eliminato dall'attacco di un avversario, capovolgi una moneta. Se le teste, il machamp di Giovanni non viene eliminato e i suoi HP rimanenti diventano 10. Questa potenza non può essere utilizzata se il machamp di Giovanni è già addormentato, confuso o paralizzato.",
            pt: "Se o Machamp de Giovanni seria nocauteado pelo ataque de um oponente, vire uma moeda. Se as cabeças, o Machamp de Giovanni não será nocauteado e o HP restante se tornará 10. Esse poder não pode ser usado se o Machamp de Giovanni já estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
          name: {
            en: "Hurricane Punch",
            ja: "ハリケーンパンチ",
            fr: "Punch de l'ouragan",
            de: "Hurrikan Punch",
            es: "Puñetazo",
            it: "Punch dell'uragano",
            pt: "Punch de furacão",
          },
          effect: {
            en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 4 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
