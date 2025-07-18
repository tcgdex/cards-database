import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Natu",
         ja: "natu",
         fr: "Natu",
         de: "Natu",
         es: "Natu",
         it: "Natu",
         pt: "Natu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Mirror Coat",
            ja: "ミラーコート",
            fr: "Manteau miroir",
            de: "Spiegelmantel",
            es: "Espejo",
            it: "Cappotto a specchio",
            pt: "Casaco espelhado",
          },
          effect: {
            en: "If Natu is Burned or Poisoned by an opponent's attack (even if Natu is Knocked Out), the Attacking PokÃ©mon is now affected by the same Special Conditions (1 if there is only 1).",
            ja: "NATUが敵の攻撃によって燃やされたり、毒されたりした場合（NATUがノックアウトされたとしても）、攻撃するポケモンは、同じ特別な条件の影響を受けます（1つしかない場合は1）。",
            fr: "Si Natu est brûlé ou empoisonné par l'attaque d'un adversaire (même si Natu est éliminé), le Poké attaquant est désormais affecté par les mêmes conditions spéciales (1 s'il n'y en a que 1).",
            de: "Wenn Natu durch den Angriff eines Gegners verbrannt oder vergiftet wird (auch wenn Natu ausgeschaltet wird), wird der angreifende Poké Mon Mon von denselben besonderen Bedingungen betroffen (1, wenn es nur 1 gibt).",
            es: "Si Natu es quemado o envenenado por el ataque de un oponente (incluso si Natu es noqueado), el Poké Mon atacante ahora se ve afectado por las mismas condiciones especiales (1 si solo hay 1).",
            it: "Se Natu viene bruciato o avvelenato dall'attacco di un avversario (anche se Natu viene eliminato), l'attacco di Poké Mon è ora influenzato dalle stesse condizioni speciali (1 se c'è solo 1).",
            pt: "Se Natu for queimado ou envenenado pelo ataque de um oponente (mesmo que a Natu seja nocauteada), o Poké -Mon atacante agora é afetado pelas mesmas condições especiais (1 se houver apenas 1).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Razor Wind",
            ja: "かみそりの風",
            fr: "Vent de rasoir",
            de: "Rasierender Wind",
            es: "Viento de afeitar",
            it: "Vento del rasoio",
            pt: "Vento de barbear",
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
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
