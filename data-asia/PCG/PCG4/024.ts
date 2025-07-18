import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Jynx",
         ja: "ジンクス",
         fr: "Jynx",
         de: "Jynx",
         es: "Jindo",
         it: "Jynx",
         pt: "Jynx",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [124],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Jynx is an Evolved PokÃ©mon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness.",
            ja: "Jynxが進化したポカモンである限り、Jynxに与えられた損傷を除いて、相手の攻撃のすべての影響を防ぎ、Jynxは弱さを持っていません。",
            fr: "Tant que Jynx est un poké évolué, empêcher tous les effets des attaques de l'adversaire, à l'exception des dégâts, causés à Jynx et Jynx n'a aucune faiblesse.",
            de: "Solange Jynx ein weiterentwickelter Pokémon ist, verhindern Sie alle Auswirkungen der Angriffe des Gegners, mit Ausnahme von Schäden an Jynx, und Jynx hat keine Schwäche.",
            es: "Mientras Jynx sea un Poké Mon evolucionado, evite todos los efectos de los ataques del oponente, excepto el daño, hecho a Jynx, y Jynx no tiene debilidad.",
            it: "Finché Jynx è un poké evolutivo, prevenire tutti gli effetti degli attacchi dell'avversario, tranne il danno, fatto a Jynx e Jynx non ha debolezza.",
            pt: "Enquanto o Jynx for um Poké -Mon evoluído, evite todos os efeitos dos ataques do oponente, exceto danos, causados ao Jynx, e Jynx não tem fraqueza.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Freeze Light",
            ja: "凍結光",
            fr: "Éclairage",
            de: "Einfrieren von Licht",
            es: "Congelar la luz",
            it: "Luce congelata",
            pt: "Congelar luz",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si la queue, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si las colas, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in carica viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, o pokemon defensor agora está queimado.",
          },
        },
        {
          cost: ["Water", "Psychic", "Colorless"],
          name: {
            en: "Pure Power",
            ja: "純粋な力",
            fr: "Puissance pure",
            de: "Reine Kraft",
            es: "Poder puro",
            it: "Pura potenza",
            pt: "Poder puro",
          },
          effect: {
            en: "Put 4 damage counters on your opponent's Pokemon in any way you like.",
            ja: "相手のポケモンに4つのダメージカウンターを、好きなように配置します。",
            fr: "Mettez 4 compteurs de dégâts sur le pokemon de votre adversaire de quelque manière que ce soit.",
            de: "Setzen Sie 4 Schadenszähler auf das Pokémon Ihres Gegners auf jede mögliche Weise.",
            es: "Pon 4 contadores de daño en el Pokémon de tu oponente de la manera que quieras.",
            it: "Metti 4 contatori di danno sul Pokemon del tuo avversario in ogni modo che desideri.",
            pt: "Coloque 4 contadores de danos no Pokémon do seu oponente da maneira que desejar.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
