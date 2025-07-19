import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Grovyle",
         ja: "グロビル",
         fr: "Fraternité",
         de: "Grovyle",
         es: "Estiramiento",
         it: "Grovyle",
         pt: "Grovyle",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [253],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にグロビルに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faites à Grovyle pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die Grovyle während der nächsten Kurve Ihres Gegners angerichtet haben.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Grovyle durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto a Grovyle durante il prossimo turno dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a Grovyle durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
