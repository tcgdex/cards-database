import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmontop",
         ja: "ヒットモントップ",
         fr: "Hitmontop",
         de: "Hitmontop",
         es: "Hitmontop",
         it: "Hitmontop",
         pt: "Hitmontop",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [237],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Detect",
            ja: "検出する",
            fr: "Détecter",
            de: "Erkennen",
            es: "Detectar",
            it: "Rilevare",
            pt: "Detectar",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Hitmontop.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ヒットモントップに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain virage de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, effectués à Hitmontop.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Hitmontop verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a HitMontop.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a HitMontop.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Hitmontop.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Triple Kick",
            ja: "トリプルキック",
            fr: "Triple coup de pied",
            de: "Triple Kick",
            es: "Patada triple",
            it: "Triplo calcio",
            pt: "Triple Kick",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
