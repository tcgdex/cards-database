import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Vigoroth",
         ja: "vigoroth",
         fr: "Vigoroth",
         de: "Vigoroth",
         es: "Vigoroso",
         it: "Vigoroth",
         pt: "Vigoroth",
      },


      category: "Pokemon",
      dexId: [288],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Strikes Back",
            ja: "ストライクバック",
            fr: "Frappe en arrière",
            de: "Schlägt zurück",
            es: "Retroceso",
            it: "Colpisce indietro",
            pt: "Volta de volta",
          },
          effect: {
            en: "If Vigoroth is your Active PokÃ©mon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking PokÃ©mon.",
            ja: "Vigorothがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Vigorothがノックアウトされたとしても）、攻撃するPokã©Monに1つのダメージカウンターを置きます。",
            fr: "Si Vigoroth est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Vigoroth est éliminé), mettez 1 compteur de dégâts sur le Pokã © lun.",
            de: "Wenn Vigoroth Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Vigoroth ausgeschaltet wird), setzen Sie 1 Schadenschalter auf den angreifenden Poké Mon Mon.",
            es: "Si Vigoroth es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Vigoroth es noqueado), ponga 1 mostrador de daño en el Poké Mon atacante.",
            it: "Se Vigoroth è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Vigoroth viene eliminato), metti 1 contatore di danni sul poké mon.",
            pt: "Se o Vigoroth é o seu Poké Mon ativo e for danificado pelo ataque de um oponente (mesmo que o Vigoroth seja nocauteado), coloque 1 contador de danos no Poké de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ambush",
            ja: "待ち伏せ",
            fr: "Embuscade",
            de: "Hinterhalt",
            es: "Emboscada",
            it: "Agguato",
            pt: "Emboscada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
          },
        },
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
