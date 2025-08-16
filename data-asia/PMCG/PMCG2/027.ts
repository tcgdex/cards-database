import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Mr. Mime",
         ja: "マイムさん",
         fr: "M. MIME",
         de: "Mr. Mime",
         es: "Sr. Mime",
         it: "Sig. Mime",
         pt: "Sr. Mime",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [122],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Invisible Wall",
            ja: "目に見えない壁",
            fr: "Mur invisible",
            de: "Unsichtbare Wand",
            es: "Muro invisible",
            it: "Muro invisibile",
            pt: "Parede invisível",
          },
          effect: {
            en: "Whenever an attack <em>(including your own)</em> does 30 or more damage to Mr. Mime <em>(after applying Weakness and Resistance)</em>, prevent that damage. <em>(Any other effects of attacks still happen.)</em> This power stops working while Mr. Mime is Asleep, Confused, or Paralyzed.",
            ja: "攻撃が<em>（あなた自身を含む）</em>は、Mime <em>（脱力感と抵抗を適用した後）</em>に30以上のダメージを与えるときは、その損傷を防ぎます。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは、Mime氏が眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Chaque fois qu'une attaque <em> (y compris le vôtre) </em> inflige 30 dommages ou plus à M. Mime <em> (après avoir appliqué une faiblesse et une résistance) </em>, empêchez ces dommages. <em> (tous les autres effets des attaques se produisent encore.) </em> Ce pouvoir cesse de fonctionner pendant que M. Mime est endormi, confus ou paralysé.",
            de: "Immer wenn ein Angriff <em> (einschließlich Ihrer eigenen) </em> 30 oder mehr Schäden an Herrn Mime <em> (nach Anwendung von Schwäche und Widerstand) </em> schädigt, verhindern Sie diesen Schaden. <em> (alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Cada vez que un ataque <em> (incluido el suyo) </em> hace 30 o más daños al Sr. Mime <em> (después de aplicar debilidad y resistencia) </em>, evite ese daño. <em> (todavía ocurren otros efectos de los ataques). </em> Este poder deja de funcionar mientras el Sr. Mime está dormido, confundido o paralizado.",
            it: "Ogni volta che un attacco <em> (incluso il tuo) </em> fa 30 o più danni al signor Mime <em> (dopo aver applicato la debolezza e la resistenza) </em>, impedisce tali danni. <em> (qualsiasi altro effetto degli attacchi ancora accade.) </em> Questo potere smette di funzionare mentre il signor Mime è addormentato, confuso o paralizzato.",
            pt: "Sempre que um ataque <em> (incluindo o seu) causa 30 ou mais danos ao Sr. Mime <em> (depois de aplicar fraqueza e resistência) </em>, evite esse dano. <em> (Quaisquer outros efeitos dos ataques ainda acontecem.) </em> Esse poder para de funcionar enquanto o Sr. Mime está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "ディフェンディングポケモンの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf dem verteidigenden Pokémon.",
            es: "Hace 10 daños más 10 10 más de daño por cada contador de daños en el Pokémon defensor.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore del danno sul Pokemon in difesa.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no pokemon atual.",
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
