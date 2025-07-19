import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat (Delta Species)",
         ja: "クロバット（デルタ種）",
         fr: "Crobat (espèces delta)",
         de: "Crobat (Delta -Arten)",
         es: "Crobat (especie delta)",
         it: "Crobat (Delta Species)",
         pt: "Crobat (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Radar Jam",
            ja: "レーダージャム",
            fr: "Confiture de radar",
            de: "Radarmarmelade",
            es: "Mermelada de radar",
            it: "Marmellata radar",
            pt: "Geléia de radar",
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
          damage: 30,
        },
        {
          cost: ["Grass", "Metal", "Colorless"],
          name: {
            en: "Target Attack",
            ja: "ターゲット攻撃",
            fr: "Attaque cible",
            de: "Zielangriff",
            es: "Ataque objetivo",
            it: "Attacco bersaglio",
            pt: "Ataque alvo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. If that Pokemon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。そのポケモンにはすでにダメージカウンターがある場合、この攻撃は代わりに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. Si ce pokemon a déjà des compteurs de dégâts dessus, cette attaque fait 60 dégâts à la place. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. Wenn dieses Pokémon bereits Schadenszähler hat, verursacht dieser Angriff stattdessen 60 Schaden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. Si ese Pokémon ya tiene contadores de daño, este ataque hace 60 daños en su lugar. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. Se quel Pokemon ha già contatori di danni su di esso, questo attacco fa invece 60 danni. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. Se esse Pokémon já tiver contadores de danos, esse ataque causará 60 danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
