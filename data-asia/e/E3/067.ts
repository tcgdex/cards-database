import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Aipom",
         ja: "aipom",
         fr: "Aipom",
         de: "Aipom",
         es: "Aipom",
         it: "Aipom",
         pt: "AIPOM",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [190],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Stretch Tail",
            ja: "ストレッチテール",
            fr: "Queue d'étirement",
            de: "Dehnungsschwanz",
            es: "Cola estirada",
            it: "Stretch Tail",
            pt: "Cauda esticada",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokemon and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 des Pokémon bancés de votre adversaire et cette attaque lui fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, wählen Sie 1 des Pokémon Ihres Gegners und dieser Angriff 10 Schaden daran. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, elija 1 de los Pokémon de banca de su oponente y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del Pokemon in panchina del tuo avversario e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do Pokémon em banco do seu oponente e esse ataque causar 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Skedaddle",
            ja: "Skedaddle",
            fr: "Enjolier",
            de: "Türmen",
            es: "Salir pitando",
            it: "Skedaddle",
            pt: "Debandar",
          },
          effect: {
            en: "Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokemon, this attack does nothing.",
            ja: "Aipomとすべての基本的なエネルギーカードをあなたの手に返します。ベンチ付きポケモンがない場合、この攻撃は何もしません。",
            fr: "Renvoyez AIPOM et toutes les cartes d'énergie de base qui y sont fixées à votre main. Si vous n'avez pas de Pokémon banc, cette attaque ne fait rien.",
            de: "Geben Sie AIPOM und alle grundlegenden Energiekarten zurück, die an Ihrer Hand angeschlossen sind. Wenn Sie kein Pokemon mit Bank haben, tut dieser Angriff nichts.",
            es: "Regrese AIPOM y todas las tarjetas de energía básicas unidas a su mano. Si no tienes Pokémon en banca, este ataque no hace nada.",
            it: "Restituisci Aipom e tutte le carte di energia di base attaccate alla tua mano. Se non hai Pokemon in panchina, questo attacco non fa nulla.",
            pt: "Retorne o AIPOM e todos os cartões de energia básicos anexados à sua mão. Se você não tem Pokémon com bancada, esse ataque não faz nada.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
