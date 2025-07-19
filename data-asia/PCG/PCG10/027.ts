import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Jolteon Star",
         ja: "ジョルテオンスター",
         fr: "Étoile de Jolteon",
         de: "Jolteon Star",
         es: "Estrella de Jolteon",
         it: "Jolteon Star",
         pt: "Jolteon Star",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Yellow Ray",
            ja: "イエローレイ",
            fr: "Rayon jaune",
            de: "Gelber Strahl",
            es: "Rayo amarillo",
            it: "Raggio giallo",
            pt: "Raio amarelo",
          },
          effect: {
            en: "Once during your turn, when you put Jolteon {{Star|this PokÃ©mon}} from your hand onto your Bench, you may put 1 damage counter on each Active PokÃ©mon (both yours and your opponent's).",
            ja: "ターン中に、Jolteon {{Star | ThisPokã©Mon}}を手からベンチに置くと、各アクティブなPokã©Mon（あなたと対戦相手の両方）に1つのダメージカウンターを置くことができます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Jolteon {{Star | Ce Pokã © Mon}} de votre main sur votre banc, vous pouvez mettre 1 compteur de dégâts sur chaque pokã © Mon actif (à la fois le vôtre et celui de votre adversaire).",
            de: "Einmal in Ihrem Zug, wenn Sie Jolteon {{stern | this poké © mon}} auf Ihre Bank legen, können Sie 1 Schadenschalter auf jedem aktiven Poké mon (sowohl Ihres als auch Ihrem Gegner) legen.",
            es: "Una vez durante su turno, cuando coloca a Jolteon {{Star | este Poké Mon}} de su mano en su banco, puede poner 1 contador de daño en cada Poké activo (tanto el tuyo como el de su oponente).",
            it: "Una volta durante il tuo turno, quando metti Jolteon {{Star | questo poké mon}} dalla tua mano sulla panchina, puoi mettere 1 contatore di danni su ogni poké attivo (sia il tuo che il tuo avversario).",
            pt: "Uma vez durante o seu turno, quando você coloca Jolteon {{Star | Este Poké Mon}} da sua mão em seu banco, você pode colocar 1 contador de danos em cada Poké de Mon ativo (tanto o seu quanto o do seu oponente).",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless"],
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
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Jolteon {{Star|this Pokemon}} during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、攻撃を含む攻撃のすべての影響を防ぎ、ジョルテオン{{star | this pokemon}}に敵の次のターン中に行われます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, effectués à Jolteon {{Star | ce pokemon}} lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die Jolteon {{star | dieses Pokemon}} während der nächsten Kurve Ihres Gegners angerichtet haben.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, realizado a Jolteon {{Star | This Pokemon}} durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto a Jolteon {{Star | questo Pokemon}} durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a Jolteon {{Star | this Pokemon}} durante o próximo turno do seu oponente.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
