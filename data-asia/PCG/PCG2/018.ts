import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Camerupt",
         ja: "カメラプ",
         fr: "CamerUpt",
         de: "Kamerupt",
         es: "Ceroupt",
         it: "Camerupt",
         pt: "Câmera",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [323],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Back Burner",
            ja: "バックバーナー",
            fr: "Brûleur arrière",
            de: "Backbrenner",
            es: "Quemador de espalda",
            it: "Bruciatore posteriore",
            pt: "Queimador traseiro",
          },
          effect: {
            en: "Search your discard pile for up to 2 basic Energy cards and attach them to your Pokemon in any way you like.",
            ja: "廃棄の山を検索して、最大2枚の基本エネルギーカードを使用して、好きな方法でポケモンに取り付けます。",
            fr: "Recherchez votre tas de défausse jusqu'à 2 cartes d'énergie de base et attachez-les à votre Pokémon de quelque manière que ce soit.",
            de: "Suchen Sie Ihren Abwurfstapel nach bis zu 2 grundlegenden Energiekarten und befestigen Sie sie in jeder möglichen Art und Weise an Ihr Pokémon.",
            es: "Busque en su pila de descarte para hasta 2 tarjetas de energía básicas y adjuntelas a su Pokémon de la manera que desee.",
            it: "Cerca il tuo mucchio di scarti per un massimo di 2 carte di energia di base e attaccali al tuo Pokemon in ogni modo che desideri.",
            pt: "Pesquise sua pilha de descarte por até 2 cartões básicos de energia e anexe -os ao seu Pokémon da maneira que desejar.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Split Bomb",
            ja: "分割爆弾",
            fr: "Bombe partagée",
            de: "Split Bombe",
            es: "Bomba dividida",
            it: "Bomba divisa",
            pt: "Bomba dividida",
          },
          effect: {
            en: "Choose 2 of your opponent's Pokemon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 du Pokémon de votre adversaire. Cette attaque fait 30 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Pokémon Ihres Gegners. Dieser Angriff schädigt jeden von ihnen 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 del Pokémon de tu oponente. Este ataque hace 30 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon del tuo avversario. Questo attacco fa 30 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 do Pokémon do seu oponente. Este ataque causa 30 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

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
