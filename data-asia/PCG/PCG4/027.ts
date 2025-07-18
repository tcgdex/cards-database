import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Politoed ex",
         ja: "Politoed Ex",
         fr: "Ex-polito",
         de: "POLITOD EX",
         es: "Ex polaco",
         it: "Politoed ex",
         pt: "Polito ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [186],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Upward Lick",
            ja: "上向きのなめ",
            fr: "Lèche vers le haut",
            de: "Nach oben lecken",
            es: "Lamer hacia arriba",
            it: "Lick verso l'alto",
            pt: "Lamber ascendente",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. If that Pokemon is a Stage 2 Evolved Pokemon, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。そのポケモンがステージ2の進化したポケモンである場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Si ce Pokémon est un Pokémon évolué de stade 2, cette attaque fait 50 dégâts à la place. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Wenn dieses Pokémon ein Pokémon der Stufe 2 ist, verursacht dieser Angriff stattdessen 50 Schaden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. Si ese Pokémon es un Pokémon evolucionado en la etapa 2, este ataque hace 50 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Se quel Pokemon è un Pokemon evoluto della Fase 2, questo attacco fa invece 50 danni. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. Se esse Pokémon for um Pokémon evoluído do estágio 2, esse ataque causará 50 danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Punch and Run",
            ja: "パンチとラン",
            fr: "Punch et courir",
            de: "Schlagen und rennen",
            es: "Golpear y correr",
            it: "Puntare e correre",
            pt: "Puxe e corra",
          },
          effect: {
            en: "Switch Politoed ex with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンの1つでPolitoed Exを切り替えます。",
            fr: "Switch Politoed ex avec 1 de votre Pokémon banc.",
            de: "Wechseln Sie die politische Ex mit 1 Ihrer Bank -Pokemon.",
            es: "Cambie el ex polaco con 1 de tu banca Pokémon.",
            it: "Cambia Politoed Ex con 1 del tuo Pokemon in panchina.",
            pt: "Mudar o ex politido com 1 de seu Pokémon em banco.",
          },
          damage: 40,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Swallow Up",
            ja: "飲み込む",
            fr: "Avaler",
            de: "Verschlingen",
            es: "Tragar",
            it: "Inghiottire",
            pt: "Engolir",
          },
          effect: {
            en: "Before doing damage, count the remaining HP of the Defending Pokemon and Politoed ex. If the Defending Pokemon has fewer remaining HP than Politoed ex's, this attack does 120 damage instead.",
            ja: "ダメージを与える前に、防御するポケモンと政治のExの残りのHPを数えます。防御するポケモンがPolitoed Exよりも残っているHPが少ない場合、この攻撃は代わりに120のダメージを与えます。",
            fr: "Avant de faire des dégâts, comptez le HP restant du Pokémon en défense et ex. Si le Pokémon en défense a moins de HP restants que les ex Politoed, cette attaque fait 120 dégâts à la place.",
            de: "Zählen Sie vor Schaden den verbleibenden HP des verteidigenden Pokemon und der politischen Ex. Wenn das verteidigende Pokemon weniger verbleibende HP als politische Ex hat, verursacht dieser Angriff stattdessen 120 Schaden.",
            es: "Antes de hacer daño, cuente el HP restante de los Pokémon defensores y Politoed Ex. Si el Pokémon defensor tiene menos HP restante que los ex políticos, este ataque hace 120 daños.",
            it: "Prima di fare danni, conta i restanti HP del Pokemon in carica e Poloted Ex. Se il Pokemon in carica ha meno HP rimanenti rispetto a Ex Politoed, questo attacco fa invece 120 danni.",
            pt: "Antes de causar danos, conte o HP restante dos Pokemon atual e do politão. Se o Pokémon atual tiver menos HP restante do que os ex, esse ataque causará 120 danos.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
