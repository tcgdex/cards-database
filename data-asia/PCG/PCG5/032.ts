import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Gorebyss",
         ja: "ゴアビー",
         fr: "Gorebyss",
         de: "Gorebyss",
         es: "Gorebyss",
         it: "Gorebyss",
         pt: "Gorebyss",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [368],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Booster",
            ja: "反応ブースター",
            fr: "Booster réactif",
            de: "Reaktiver Booster",
            es: "Refuerzo reactivo",
            it: "Booster reattivo",
            pt: "Reforço reativo",
          },
          effect: {
            en: "Each React Energy card attached to all of your Huntail and Gorebyss provides 2 Energy of every type but has no effect other than providing Energy.",
            ja: "すべてのHuntailとGorebyssに取り付けられた各React Energyカードは、あらゆるタイプの2つのエネルギーを提供しますが、エネルギーを提供する以外に効果はありません。",
            fr: "Chaque carte d'énergie React attachée à tous vos Huntail et Gorebyss fournit 2 énergies de chaque type mais n'a d'autre effet que de fournir de l'énergie.",
            de: "Jede React -Energiekarte, die an Ihren gesamten Huntail und Gorebyss angeschlossen ist, bietet 2 Energie jedes Typs, hat jedoch keine andere Wirkung als Energie.",
            es: "Cada tarjeta de energía reaccionada adjunta a todos sus Hunail y Gorebys proporciona 2 energía de cada tipo, pero no tiene ningún efecto que no sea proporcionar energía.",
            it: "Ogni carta di energia reagisce collegata a tutta la tua zappa e Gorebyss fornisce 2 energia di ogni tipo ma non ha alcun effetto se non quello di fornire energia.",
            pt: "Cada cartão de energia do React anexado a toda a sua caça e Gorebyss fornece 2 energia de todos os tipos, mas não tem nenhum efeito além de fornecer energia.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Hydro Pump",
            ja: "ハイドロポンプ",
            fr: "Pompe hydroélectrique",
            de: "Hydropumpe",
            es: "Bomba hidroeléctrica",
            it: "Pompa idro",
            pt: "Bomba hidrelétrica",
          },
          effect: {
            en: "Does 30 damage plus 20 more damage for each Water Energy attached to Gorebyss but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
            ja: "30のダメージに加えて、Gorebyssに取り付けられた水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée aux Gorebyss, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 20 weitere Schäden für jede an Gorebyss befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Hace 30 daños más 20 más de daño por cada energía de agua unida a Gorebys, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 40 daños de esta manera.",
            it: "Fa 30 danni più 20 danni in più per ogni energia idrica attaccata a Gorebyss ma non utilizzata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "Causam 30 danos mais 20 mais danos a cada energia da água anexada ao Gorebyss, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
      ],


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
