import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Vileplume - 003/087",
         ja: "vileplume -003/087",
         fr: "Vileplume - 003/087",
         de: "Vileplume - 003/087",
         es: "Vileplume - 003/087",
         it: "Vileplume - 003/087",
         pt: "Vileplume - 003/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Scent",
            ja: "毒の香り",
            fr: "Parfum de poison",
            de: "Giftduft",
            es: "Aroma del veneno",
            it: "Profumo veleno",
            pt: "Perfume de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned and Confused. If tails, the Defending Pokemon is now Poisoned and Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは毒され、混乱しています。尾の場合、防御するポケモンは毒され、眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné et confus. Si Tails, le Pokémon en défense est maintenant empoisonné et endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt vergiftet und verwirrt. Wenn Schwänze, ist das verteidigende Pokemon jetzt vergiftet und schläft.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado y confundido. Si Tails, el Pokémon defensor ahora está envenenado y dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato e confuso. Se le code, il Pokemon in carica è ora avvelenato e addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado e confuso. Se as caudas, o pokemon atual agora está envenenado e dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Addictive Pollen",
            ja: "中毒性の花粉",
            fr: "Pollen addictif",
            de: "Suchtpollen",
            es: "Polen adictivo",
            it: "Polline avvincente",
            pt: "Pólen viciante",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中にサポーターカードをプレイできません。",
            fr: "Retourner une pièce. Si les têtes, votre adversaire ne peut pas jouer des cartes supporters lors de son prochain tour.",
            de: "Eine Münze drehen. Wenn Ihr Gegner während seiner nächsten Kurve keine Unterstützerkarten spielen kann.",
            es: "Voltea una moneda. Si se dirige, tu oponente no puede jugar cartas de seguidores durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario non può giocare a carte di sostegno durante il suo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, seu oponente não poderá jogar cartas de apoiador durante o próximo turno.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
