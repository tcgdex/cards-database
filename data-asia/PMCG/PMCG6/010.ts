import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Ivysaur",
         ja: "エリカのイビサウルス",
         fr: "Ivysaur d'Erika",
         de: "Erikas IVYSaur",
         es: "Erika's Ivysaur",
         it: "Ivysaur di Erika",
         pt: "Ivysaur de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [2],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Relaxing Scent",
            ja: "リラックスした香り",
            fr: "Parfum relaxant",
            de: "Entspannender Duft",
            es: "Aroma relajante",
            it: "Profumo rilassante",
            pt: "Perfume relaxante",
          },
          effect: {
            en: "As long as Erika's Ivysaur is your Active Pokmon, whenever an attack <em>(even your own)</em> does damage to any Pokmon <em>(after applying Weakness and Resistance)</em>, that attack only does half the damage to that Pokmon (rounded up to the nearest 10). <em>(Any other effects of attacks still happen.)</em> This power stops working while Erika's Ivysaur is Asleep, Confused, or Paralyzed.",
            ja: "エリカのイビサウルスがあなたのアクティブなポクモンである限り、攻撃が<em>（あなた自身でさえ）</em>がポクモン<em>にダメージを与えるときはいつでも（衰弱と抵抗を適用した後）</em> </em>、その攻撃はそのポクモンのダメージの半分のみを行います（最寄りの10まで丸められます）。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは機能しなくなり、エリカのイビサウルスは眠り、混乱し、麻痺しています。",
            fr: "Tant que les ivysaur d'Erika sont votre pokmon actif, chaque fois qu'une attaque <em> (même la vôtre) </em> endommage tout Pokmon <em> (après avoir appliqué une faiblesse et une résistance) </em>, cette attaque ne fait que la moitié des dégâts à ce pokmon (arrondi au 10). <em> (tous les autres effets des attaques se produisent encore.) </em> Ce pouvoir cesse de fonctionner tandis que Ivysaur d'Erika dort, confus ou paralysé.",
            de: "Solange Erikas IVYSaur Ihr aktives Pokmon ist, schädigt ein Angriff (sogar Ihr eigenes), wenn ein Angriff <em> (sogar Ihr eigenes) Pokmon <em> schädigt (nachdem Schwäche und Widerstand angewendet wurden), dieser Angriff nur die Hälfte der Hälfte der Schädigung dieses Pokmons (abgerundet auf die nächsten 10). <em> (alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Mientras el Ivysaur de Erika sea tu Pokmon activo, cada vez que un ataque <em> (incluso el tuyo) </em> da daño a cualquier Pokmon <em> (después de aplicar debilidad y resistencia) </em>, ese ataque solo hace la mitad del daño a ese Pokmon (redondeado hasta el 10 más cercano). <em> (todavía ocurren cualquier otro efecto de los ataques). </em> Este poder deja de funcionar, mientras que el Ivysaur de Erika está dormido, confundido o paralizado.",
            it: "Finché Ivysaur di Erika è il tuo Pokmon attivo, ogni volta che un attacco <em> (anche il tuo) </em> fa danni a qualsiasi Pokmon <em> (dopo aver applicato la debolezza e la resistenza) </em>, quell'attacco fa solo metà del danno a quel Pokmon (arrotondato fino ai 10 più vicini). <em> (qualsiasi altro effetto degli attacchi ancora accade.) </em> Questo potere smette di funzionare mentre Ivysaur di Erika è addormentato, confuso o paralizzato.",
            pt: "Enquanto o Ivysaur de Erika for o seu Pokmon ativo, sempre que um ataque <em> (mesmo o seu) </em> danifica a qualquer Pokmon <em> (depois de aplicar fraqueza e resistência) </em>, esse ataque causa apenas metade dos danos a esse Pokmon (arredondado para os 10 mais próximos). <em> (Quaisquer outros efeitos dos ataques ainda acontecem.) </em> Esse poder para de funcionar enquanto o Ivysaur de Erika está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Double Razor Leaf",
            ja: "ダブルレザーの葉",
            fr: "Feuille de rasoir double",
            de: "Doppel -Rasiererblatt",
            es: "Hoja de afeitar doble",
            it: "Doppia foglia di rasoio",
            pt: "Folha de barbear dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
