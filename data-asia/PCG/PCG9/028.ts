import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Rayquaza ex (Delta Species)",
         ja: "Rayquaza Ex（デルタ種）",
         fr: "Rayquaza ex (espèce delta)",
         de: "Rayquaza EX (Delta -Arten)",
         es: "Rayquaza ex (especie delta)",
         it: "Rayquaza Ex (Delta Species)",
         pt: "Rayquaza Ex (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 110,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Rage Aura",
            ja: "怒りのオーラ",
            fr: "Aura de rage",
            de: "Wut Aura",
            es: "Aura de ira",
            it: "Rabbia aura",
            pt: "Aura de raiva",
          },
          effect: {
            en: "If you have more Prize cards left than your opponent, ignore all Colorless Energy necessary to use Rayquaza ex's Special Circuit and Sky-high Claws attacks.",
            ja: "対戦相手よりも多くの賞品が残っている場合は、Rayquaza Exの特別なサーキットとSky-High Claws攻撃を使用するために必要なすべての無色のエネルギーを無視してください。",
            fr: "S'il vous reste plus de cartes de prix que votre adversaire, ignorez toute l'énergie incolore nécessaire pour utiliser les attaques spéciales de Rayquaza Ex et High Claws.",
            de: "Wenn Sie mehr Preiskarten übrig haben als Ihr Gegner, ignorieren Sie alle farblosen Energie, die für die Verwendung von Rayquaza Ex-Angriffen von Special Circuit und Himmelsklauen erforderlich sind.",
            es: "Si le quedan más tarjetas de premios que su oponente, ignore toda la energía incolora necesaria para usar el circuito especial de Rayquaza Ex y los ataques de garras altísimas.",
            it: "Se hai più carte premiate rispetto al tuo avversario, ignora tutta l'energia incolore necessaria per utilizzare gli attacchi speciali di Rayquaza Ex e gli attacchi di artigli altissimi.",
            pt: "Se você tiver mais cartões de prêmios do que o seu oponente, ignore toda a energia incolor necessária para usar o circuito especial de Rayquaza Ex e os ataques de garras no céu.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Special Circuit",
            ja: "特別なサーキット",
            fr: "Circuit spécial",
            de: "Spezialkreis",
            es: "Circuito especial",
            it: "Circuito speciale",
            pt: "Circuito especial",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. If you choose a Pokemon that has any Poké-Powers or Poké-Bodies, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。ポケパワーやポケボディがあるポケモンを選択した場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Si vous choisissez un pokemon qui a des poké-powers ou des poké-corps, cette attaque fait 50 dégâts à la place. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Wenn Sie ein Pokémon mit Poké-Powers oder Poké-Körpern wählen, verursacht dieser Angriff stattdessen 50 Schaden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. Si eliges un Pokémon que tiene algún Poké-Power o Poké-Bodies, este ataque hace 50 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Se scegli un Pokemon con powers o bodie di Poké, questo attacco fa invece 50 danni. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. Se você escolher um Pokémon que tenha pó de Poké ou corpos Poké, esse ataque causará 50 danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
          name: {
            en: "Sky-high Claws",
            ja: "空の爪",
            fr: "Griffes de ciel",
            de: "Himmelhohe Krallen",
            es: "Caquetas altísimas",
            it: "Artigli alti",
            pt: "Garras altas",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
