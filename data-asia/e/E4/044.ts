import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie - 044/088",
         ja: "スターミー-044/088",
         fr: "Starmie - 044/088",
         de: "Starmie - 044/088",
         es: "Starmie - 044/088",
         it: "Starmie - 044/088",
         pt: "Starmie - 044/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Burst",
            ja: "エネルギーバースト",
            fr: "Éclatement d'énergie",
            de: "Energieausbruch",
            es: "Estallido de energía",
            it: "Scoppio di energia",
            pt: "Explosão de energia",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage times the number of Energy attached to Starmie and the Defending Pokemon.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は、スターミーと防御ポケモンに取り付けられたエネルギーの数を10回ダメージします。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts fois le nombre d'énergie attachée à Starmie et au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn der Köpfe dieser Angriff 10 Schadenszeiten an verursacht, die Anzahl der an Starmie und dem verteidigenden Pokémon verbundenen Energie.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 veces el número de energía unida a Starmie y el Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa, questo attacco fa 10 danni il numero di energia attaccata a Starmie e al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos às vezes o número de energia ligada a Starmie e ao Pokémon defensor.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Star Back",
            ja: "スターバック",
            fr: "Étoiler",
            de: "Stern zurück",
            es: "Retroceder",
            it: "Star Back",
            pt: "Estrela de volta",
          },
          effect: {
            en: "Attach a basic Energy card from your discard pile to 1 of your Pokemon.",
            ja: "廃棄パイルからポケモン1に基本的なエネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie de base de votre tas de défausse à 1 de votre Pokémon.",
            de: "Fügen Sie eine grundlegende Energiekarte von Ihrem Ablagerungsstapel an 1 Ihres Pokémons an.",
            es: "Adjunte una tarjeta de energía básica de su pila de descarte a 1 de su Pokémon.",
            it: "Attacca una scheda energetica di base dalla pila di scarto a 1 del tuo Pokemon.",
            pt: "Anexe um cartão de energia básico da sua pilha de descarte a 1 do seu Pokémon.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
