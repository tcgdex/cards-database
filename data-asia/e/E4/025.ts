import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie - 025/088",
         ja: "スターミー-025/088",
         fr: "Starmie - 025/088",
         de: "Starmie - 025/088",
         es: "Starmie - 025/088",
         it: "Starmie - 025/088",
         pt: "Starmie - 025/088",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [121],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "This attack does 10 damage plus 20 more damage for each Water Energy attached to Starmie but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
            ja: "この攻撃は、スターミーに取り付けられた各水エネルギーに対して10ダメージに加えて20のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 10 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée à Starmie, mais pas utilisée pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Dieser Angriff verursacht 10 Schäden plus 20 weitere Schäden für jede an Starmie befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Este ataque hace 10 daños más 20 daños más por cada energía de agua unida a Starmie, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 40 daños de esta manera.",
            it: "Questo attacco infligge 10 danni più 20 danni per ogni energia idrica attaccata a Starmie ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "Este ataque causa 10 danos mais 20 mais danos a cada energia da água ligada a Starmie, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Core Blast",
            ja: "コアブラスト",
            fr: "Explosion de base",
            de: "Kernexplosion",
            es: "Explosión de núcleo",
            it: "Blast core",
            pt: "Explosão do núcleo",
          },
          effect: {
            en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokemon.",
            ja: "この攻撃は、防御ポケモンに取り付けられた特別なエネルギーカードごとに30のダメージに加えて20ダメージを与えます。",
            fr: "Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie spéciale attachée au Pokémon en défense.",
            de: "Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jede spezielle Energiekarte, die dem verteidigenden Pokémon angeschlossen ist.",
            es: "Este ataque hace 30 daños más 20 más de daño por cada tarjeta de energía especial unida al Pokémon defensor.",
            it: "Questo attacco infligge 30 danni più 20 danni in più per ogni speciale carta di energia collegata al Pokemon in carica.",
            pt: "Este ataque causa 30 danos mais 20 mais danos a cada cartão de energia especial anexado ao Pokémon defensor.",
          },
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
