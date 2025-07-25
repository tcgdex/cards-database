import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Vileplume ex",
         ja: "vileplume ex",
         fr: "Vileplume ex",
         de: "Vileplume Ex",
         es: "Vileplume ex",
         it: "Vileplume ex",
         pt: "Vileplume Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 140,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Block Dust",
            ja: "ほこりをブロックします",
            fr: "Bloquer la poussière",
            de: "Staub blockieren",
            es: "Polvo",
            it: "Bloccare la polvere",
            pt: "Bloqueie a poeira",
          },
          effect: {
            en: "As long as Vileplume ex is your Active PokÃ©mon, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
            ja: "Vileplume Exがアクティブなポカモンである限り、相手は手からトレーナーカード（サポーターカードを除く）をプレイできません。",
            fr: "Tant que Vileplume Ex est votre poké actif, votre adversaire ne peut jouer aucune cartes d'entraînement (à l'exception des cartes supporters) de sa main.",
            de: "Solange Vileplume Ex Ihr aktiver Poké Mon Mon ist, kann Ihr Gegner keine Trainerkarten (außer für Unterstützerkarten) von seiner Hand spielen.",
            es: "Mientras Vileplume ex sea tu Poké Mon activo, tu oponente no puede jugar ninguna carta de entrenador (excepto las cartas de partidarios) de su mano.",
            it: "Finché Vileplume Ex è il tuo poké attivo, il tuo avversario non può giocare a nessuna carta di allenatore (tranne le carte di sostenitore) dalla sua mano.",
            pt: "Enquanto o Vileplume Ex for o seu Poké Mon ativo, seu oponente não pode jogar nenhuma cartas de treinador (exceto as cartas de apoiadores) da mão dele ou dela.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Special Formula",
            ja: "特別なフォーミュラ",
            fr: "Formule spéciale",
            de: "Sonderformel",
            es: "Fórmula especial",
            it: "Formula speciale",
            pt: "Fórmula especial",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep and Poisoned. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っていて中毒になっています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant endormi et empoisonné. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schläft das verteidigende Pokemon jetzt und vergiftet. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido y envenenado. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa è ormai addormentato e avvelenato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está dormindo e envenenado. Se o cauda, o pokemon atual agora está confuso.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
