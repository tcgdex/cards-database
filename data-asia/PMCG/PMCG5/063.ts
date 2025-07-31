import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Dratini",
         ja: "エリカのドラチーニ",
         fr: "Dratini d'Erika",
         de: "Erikas Dratini",
         es: "Dratini de Erika",
         it: "Dratini di Erika",
         pt: "Dratini de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [147],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Strange Barrier",
            ja: "奇妙な障壁",
            fr: "Barrière étrange",
            de: "Seltsame Barriere",
            es: "Barrera extraña",
            it: "Strana barriera",
            pt: "Barreira estranha",
          },
          effect: {
            en: "Whenever an attack by a Basic Pokmon <em>(including your own)</em> does 20 or more damage to Erika's Dratini <em>(after applying Weakness and Resistance)</em>, reduce that damage to 10. <em>(Any other effects of attacks still happen.)</em> This power stops working while Erika's Dratini is Asleep, Confused, or Paralyzed.",
            ja: "基本的なPokmon <em>（あなた自身を含む）による攻撃がエリカのDratini <em>（脱力感と抵抗を適用した後）</em>に20以上のダメージを与えたときはいつでも、その損傷を10に減らします（攻撃の他の効果はまだ起こります）",
            fr: "Chaque fois qu'une attaque d'un Pokmon de base <em> (y compris le vôtre) </em> fait 20 dégâts ou plus à Dratini <em> d'Erika (après avoir appliqué une faiblesse et une résistance) </em>, réduire ce dommage à 10. <em> (tous les autres effets des attaques encore se produisent.) </em> Ce pouvoir cesse de fonctionner pendant que Datini est confus, ou paralysé.",
            de: "Wenn ein Angriff eines grundlegenden Pokmon <em> (einschließlich Ihrer eigenen) </em> 20 oder mehr Schäden an Erikas Dratini <em> (nach Anwendung von Schwäche und Widerstand) </em>, reduzieren Sie diese Schädigung von 10.",
            es: "Cada vez que un ataque de un Pokmon básico <em> (incluido el tuyo) </em> hace 20 o más daño a Dratini de Erika <em> (después de aplicar debilidad y resistencia) </em>, reduzca ese daño a 10. <em> (cualquier otro efecto de ataques aún ocurre).",
            it: "Ogni volta che un attacco da parte di un Pokmon di base <em> (incluso il tuo) </em> fa 20 o più danni al dratini di Erika <em> (dopo aver applicato la debolezza e la resistenza) </em>, ridurre quel danno a 10. <em> (qualsiasi altro effetto si verifica ancora.) </em> Questo potere smette di funzionare mentre il dratini di Erika è stordito, confuso e paralizzato.",
            pt: "Sempre que um ataque de um Pokmon básico <em> (incluindo o seu) </em> causa 20 ou mais danos aos Dratini de Erika (depois de aplicar fraqueza e resistência) </em>, reduza esse dano a 10. <em> (outros efeitos dos ataques ainda acontecem.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Strike",
            ja: "テールストライク",
            fr: "Grève de la queue",
            de: "Schwanzschlag",
            es: "Cola",
            it: "Colpire la coda",
            pt: "Greve da cauda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
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
