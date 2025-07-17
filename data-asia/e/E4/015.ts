import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Heracross",
         ja: "ヘラクロス",
         fr: "Hélicoïdal",
         de: "Heracross",
         es: "Heracross",
         it: "Eracross",
         pt: "Heracross",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [214],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Angry Horn",
            ja: "怒っている角",
            fr: "Corne de colère",
            de: "Wütendes Horn",
            es: "Cuerno enojado",
            it: "Corno arrabbiato",
            pt: "Buzina zangada",
          },
          effect: {
            en: "If there are 4 or more damage counters on Heracross, this attack's base damage is 50 instead of 30.",
            ja: "ヘラクロスに4つ以上のダメージカウンターがある場合、この攻撃のベースダメージは30ではなく50です。",
            fr: "S'il y a 4 compteurs de dégâts ou plus sur Heracross, les dégâts de base de cette attaque sont de 50 au lieu de 30.",
            de: "Wenn Heracross 4 oder mehr Schadenszähler vorhanden sind, beträgt der Grundschaden dieses Angriffs 50 anstelle von 30.",
            es: "Si hay 4 o más contadores de daño en Heracross, el daño base de este ataque es de 50 en lugar de 30.",
            it: "Se ci sono 4 o più contatori di danni su Heracross, il danno di base di questo attacco è 50 anziché 30.",
            pt: "Se houver 4 ou mais contadores de danos em Heracross, o dano básico deste ataque é de 50 em vez de 30.",
          },
          damage: 30,
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
