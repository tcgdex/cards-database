import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Beedrill",
         ja: "ジャニーンのビードリル",
         fr: "Beedrill de Janine",
         de: "Janine's Beedrill",
         es: "Beedrill de Janine",
         it: "Janine's Beedrill",
         pt: "Janine's Beedrill",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [15],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Janine's Beedrill.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ジャニーンのビードリルに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, causés à Beedrill de Janine.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Janines Beedrill verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todos los efectos de los ataques, incluidos el daño, se hacen a Beedrill de Janine.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, compresi i danni, fatti al beedrill di Janine.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Beedrill de Janine.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
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
          stamp: ["1st edition"],
        },
      ],
};
