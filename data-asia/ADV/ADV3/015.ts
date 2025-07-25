import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra ex",
         ja: "Kingdra Ex",
         fr: "Kingdra ex",
         de: "Kingdra ex",
         es: "Kingdra ex",
         it: "Kingdra Ex",
         pt: "Kingdra Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Genetic Memory",
            ja: "遺伝的記憶",
            fr: "Mémoire génétique",
            de: "Genetisches Gedächtnis",
            es: "Memoria genética",
            it: "Memoria genetica",
            pt: "Memória genética",
          },
          effect: {
            en: "Use any attack from Kingdra ex's Basic Pokemon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)",
            ja: "Kingdra Exの基本的なポケモンカードまたはステージ1エボリューションカードからの攻撃を使用してください。 （Kingdra Exは、その攻撃のエネルギーコストを支払う必要はありません。）",
            fr: "Utilisez toute attaque de la carte Pokémon de base de Kingdra Ex ou de la carte d'évolution de l'étape 1. (Kingdra Ex n'a pas à payer le coût énergétique de cette attaque.)",
            de: "Verwenden Sie einen Angriff von der Basic Pokemon Card von Kingdra Ex oder der Evolutionskarte der Stufe 1. (Kingdra Ex muss die Energiekosten dieses Angriffs nicht bezahlen.)",
            es: "Use cualquier ataque de la carta básica de Pokémon de Kingdra ex o la carta de evolución de la etapa 1. (Kingdra ex no tiene que pagar por el costo de energía de ese ataque).",
            it: "Usa qualsiasi attacco dalla carta Pokemon di base di Kingdra Ex o dalla scheda Evolution Stage 1. (Kingdra Ex non deve pagare per il costo energetico di quell'attacco.)",
            pt: "Use qualquer ataque do cartão Pokemon básico da Kingdra Ex ou do estágio 1 evolução do cartão de evolução. (Kingdra EX não precisa pagar pelo custo de energia desse ataque.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hydrocannon",
            ja: "ハイドロキャノン",
            fr: "Canon hydro",
            de: "Hydro -Kanone",
            es: "Cañón hidroeléctrico",
            it: "Hydro Cannon",
            pt: "Canhão hidrelétrico",
          },
          effect: {
            en: "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
            ja: "50のダメージに加えて、Kingdra Exに取り付けられた各水エネルギーに対して20のダメージがさらに20件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            fr: "Fait 50 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée à Kingdra Ex mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Fügt 50 Schäden plus 20 weitere Schäden für jede Wasserergie, die an Kingdra EX angeschlossen ist, aber nicht zur Bezahlung der Energiekosten dieses Angriffs verwendet wird. Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Hace 50 daños más 20 más de daño por cada energía de agua unida a Kingdra EX pero no está acostumbrada a pagar el costo de energía de este ataque. No puede agregar más de 40 daños de esta manera.",
            it: "Fa 50 danni più 20 danni in più per ogni energia idrica attaccata a Kingdra Ex ma non utilizzata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "Causam 50 danos mais 20 mais danos a cada energia da água ligada ao Kingdra EX, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
