import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Shiftry ex",
         ja: "Shiftry Ex",
         fr: "SHIFTRY ex",
         de: "Shiftry Ex",
         es: "Exhifttry ex",
         it: "SHIFTRY EX",
         pt: "Shiftry Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 140,
      types: ["Darkness"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dark Eyes",
            ja: "暗い目",
            fr: "Yeux sombres",
            de: "Dunkle Augen",
            es: "Ojos oscuros",
            it: "Occhi scuri",
            pt: "Olhos escuros",
          },
          effect: {
            en: "After your opponent's PokÃ©mon uses a PokÃ©-Power, put 2 damage counters on that PokÃ©mon.",
            ja: "相手のPokã©MonがPokã©Powerを使用した後、そのPokã©Monに2つのダメージカウンターを入れます。",
            fr: "Après que Pokã © Mon de votre adversaire ait utilisé un poké-puissance, mettez 2 compteurs de dégâts sur ce pokã © lun.",
            de: "Nachdem der Poké-Mong Ihres Gegners eine Poké-Leistung verwendet, setzen Sie 2 Schadenszähler auf diesen Poké Mon Mon.",
            es: "Después de que el Poké Mon de tu oponente usa una potencia de Poké, ponga 2 contadores de daño en ese Poké Mon.",
            it: "Dopo che il poké del tuo avversario usa un poké-power, metti 2 contatori di danno su quel poké mon.",
            pt: "Depois que o Poké Mon do seu oponente usa um Poké-Power, coloque 2 contadores de danos naquele Poké Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
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
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. If that Pokemon already has any damage counters on it, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。そのポケモンにはすでにダメージカウンターがある場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Si ce Pokémon a déjà des compteurs de dégâts dessus, cette attaque fait 50 dégâts à la place. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Wenn dieses Pokémon bereits Schadenszähler hat, verursacht dieser Angriff stattdessen 50 Schaden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. Si ese Pokémon ya tiene algún contador de daño, este ataque hace 50 daños en su lugar. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Se quel Pokemon ha già contatori di danni su di esso, questo attacco fa invece 50 danni. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. Se esse Pokémon já tiver algum contador de danos, esse ataque causará 50 danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Blade Arms",
            ja: "ブレードアーム",
            fr: "Armes à lame",
            de: "Klingenarme",
            es: "Brazos de cuchilla",
            it: "Braccia lama",
            pt: "Braços da lâmina",
          },
          damage: 70,
        },
      ],


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
