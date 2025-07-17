import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Wailmer",
         ja: "ウェイルマー",
         fr: "Curieux",
         de: "Wailmer",
         es: "Wailmer",
         it: "Wailmer",
         pt: "Wailmer",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [320],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rest",
            ja: "休む",
            fr: "Repos",
            de: "Ausruhen",
            es: "Descansar",
            it: "Riposo",
            pt: "Descansar",
          },
          effect: {
            en: "Remove all Special Conditions and 4 damage counters from Wailmer (all if there are less than 4). Wailmer is now Asleep.",
            ja: "Wailmerからすべての特別な条件と4つのダメージカウンターを削除します（4つ未満の場合はすべて）。ウェイルマーは今眠っています。",
            fr: "Retirez toutes les conditions spéciales et 4 compteurs de dégâts de Wailmer (tous s'il y en a moins de 4). Wailmer est maintenant endormi.",
            de: "Entfernen Sie alle besonderen Bedingungen und 4 Schadenszähler von Wailmer (alle, wenn es weniger als 4 gibt). Wailmer schläft jetzt.",
            es: "Elimine todas las condiciones especiales y 4 contadores de daño de Wailmer (todo si hay menos de 4). Wailmer ahora está dormido.",
            it: "Rimuovere tutte le condizioni speciali e 4 contatori di danno da Wailmer (tutti se ce ne sono meno di 4). Wailmer ora dorme.",
            pt: "Remova todas as condições especiais e 4 contadores de danos do Wailmer (tudo se houver menos de 4). Wailmer está agora dormindo.",
          },
        },
        {
          cost: ["Water", "Colorless"],
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
            en: "This attack does 20 damage plus 10 more damage for each Water Energy attached to Wailmer but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "この攻撃は20のダメージに加えて、Wailmerに取り付けられた水エネルギーごとにさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque énergie d'eau attachée à Wailmer, mais pas utilisée pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede an Wailmer verbundene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Este ataque hace 20 daños más 10 daños más por cada energía de agua unida a Wailmer, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Questo attacco infligge 20 danni più 10 danni per ogni energia idrica attaccata a Wailmer ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Este ataque causa 20 de dano mais 10 mais danos para cada energia da água ligada ao Wailmer, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 3,

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
