import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Blastoise (Delta Species)",
         ja: "ブラストワーズ（デルタ種）",
         fr: "Blastoise (espèces delta)",
         de: "Blastoise (Delta -Arten)",
         es: "Blastoise (especie delta)",
         it: "Blastoise (Delta Species)",
         pt: "Blastoise (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [9],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Shield Veil",
            ja: "シールドベール",
            fr: "Veil de bouclier",
            de: "Schildschleier",
            es: "Velo de escudo",
            it: "Velo scudo",
            pt: "Véu de escudo",
          },
          effect: {
            en: "Each of your Active PokÃ©mon has no Weakness.",
            ja: "あなたのアクティブなポカモンにはそれぞれ弱点はありません。",
            fr: "Chacun de votre poké actif n'a aucune faiblesse.",
            de: "Jedes Ihrer aktiven Poké © Mon hat keine Schwäche.",
            es: "Cada uno de sus Poké Mon activo no tiene debilidad.",
            it: "Ognuno dei tuoi poké attivo non ha debolezza.",
            pt: "Cada um dos seus Pokéns ativos não tem fraqueza.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Enraged Linear Attack",
            ja: "激怒した線形攻撃",
            fr: "Attaque linéaire enragée",
            de: "Wütender linearer Angriff",
            es: "Ataque lineal enfurecido",
            it: "Attacco lineare infuriato",
            pt: "Ataque linear enfurecido",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage for each damage counter on Blastoise to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対する爆風の各ダメージカウンターに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts pour chaque compteur de dégâts sur Blastoise à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt 10 Schäden für jeden Schadenszähler auf Blastoise zu diesem Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños por cada mostrador de daño en Blastoise a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 10 danni per ciascun contatore del danno su blastoise a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos para cada balcão de danos em Blastoise a esse Pokemon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Skull Bash",
            ja: "頭蓋骨バッシュ",
            fr: "Balle de crâne",
            de: "Schädelbash",
            es: "Cráneo",
            it: "Cash cranio",
            pt: "Bash do crânio",
          },
          damage: 60,
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
