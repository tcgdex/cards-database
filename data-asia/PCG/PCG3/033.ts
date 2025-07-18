import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Manectric ex",
         ja: "Manectric Ex",
         fr: "Ex-ex-",
         de: "MANECTRIC EX",
         es: "Manéctrico",
         it: "MANETTRIC EX",
         pt: "Exttric Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [310],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Disconnect",
            ja: "切断します",
            fr: "Débrancher",
            de: "Trennen",
            es: "Desconectar",
            it: "Disconnessione",
            pt: "Desconectar",
          },
          effect: {
            en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
            ja: "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
            fr: "Votre adversaire ne peut jouer aucune cartes d'entraînement (à l'exception des cartes supporters) de sa main pendant le prochain tour de votre adversaire.",
            de: "Ihr Gegner kann während der nächsten Runde Ihres Gegners keine Trainerkarten (außer für Unterstützerkarten) aus seiner Hand spielen.",
            es: "Tu oponente no puede jugar ninguna carta de entrenador (excepto las cartas de partidario) de su mano durante el próximo turno de tu oponente.",
            it: "Il tuo avversario non può giocare a nessuna carta di allenatore (ad eccezione delle carte di sostenitore) dalla sua mano durante il prossimo turno del tuo avversario.",
            pt: "Seu oponente não pode jogar cartas de treinador (exceto as cartas de apoiador) da mão durante a próxima curva do seu oponente.",
          },
          damage: 40,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Mega Shot",
            ja: "メガショット",
            fr: "Méga tir",
            de: "Mega schoss",
            es: "Mega disparo",
            it: "Mega scatto",
            pt: "Mega tiro",
          },
          effect: {
            en: "Discard all Lightning Energy attached to Manectric ex and then choose 1 of your opponent's Pokemon. This attack does 80 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Manectric Exに取り付けられたすべての稲妻エネルギーを捨ててから、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに80のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jetez toute l'énergie de la foudre attachée à Manectric Ex, puis choisissez 1 du pokemon de votre adversaire. Cette attaque fait 80 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Entsorgen Sie alle Blitzenergie, die an manneektrische Ex angebracht sind, und wählen Sie dann 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 80. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Deseche toda la energía del rayo unida a Manectric EX y luego elija 1 del Pokémon de su oponente. Este ataque hace 80 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scartare tutta l'energia di fulmini attaccata a MANETTRIC EX e quindi scegliere 1 del Pokemon del tuo avversario. Questo attacco infligge 80 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte toda a energia do raio ligada ao Ex Manectric e, em seguida, escolha 1 dos Pokémon do seu oponente. Este ataque causa 80 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
