import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Swellow",
         ja: "スウラー",
         fr: "Sombrer",
         de: "Swellow",
         es: "Brillo",
         it: "Taswello",
         pt: "Swellow",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Steep Dive",
            ja: "急なダイビング",
            fr: "Plongée",
            de: "Steiler Tauchgang",
            es: "Bucle",
            it: "Immersione ripida",
            pt: "Mergulho íngreme",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn. If tails, during your next turn, Swellow's Glide attack's base damage is 100.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にスウェローに行われたダメージを含む攻撃のすべての影響を防ぎます。テールの場合、次のターン中に、スウェローのグライド攻撃のベースダメージは100です。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faire pour échouer lors du prochain tour de votre adversaire. Si Tails, pendant votre prochain tour, les dégâts de base de l'attaque de Glide de Swellow sont de 100.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die während der nächsten Runde Ihres Gegners an Swellow angerichtet wurden. Wenn Schwänze in Ihrem nächsten Zug, beträgt der Grundschaden von Swellow's Glide Attack 100.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Swellow durante el próximo turno de tu oponente. Si las colas, durante su próximo turno, el daño base del ataque de Glide Swellow es 100.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto su Swellow durante il turno successivo dell'avversario. Se le code, durante il tuo prossimo turno, il danno base di Glide Attack di Swellow è 100.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a Swellow durante o próximo turno do seu oponente. Se as caudas, durante o seu próximo turno, o dano básico de Swellow's Glide Atan é 100.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Glide",
            ja: "グライド",
            fr: "Glisser",
            de: "Gleiten",
            es: "Planeo",
            it: "Scivolare",
            pt: "Deslizar",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
