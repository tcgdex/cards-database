import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Vileplume",
         ja: "エリカのvileplume",
         fr: "Vileplume d'Erika",
         de: "Erikas Vileplume",
         es: "Vilueplume de Erika",
         it: "Il vileplume di Erika",
         pt: "O vileplume de Erika",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Pollen Defense",
            ja: "花粉防衛",
            fr: "Défense du pollen",
            de: "Pollenverteidigung",
            es: "Defensa del polen",
            it: "Difesa del polline",
            pt: "Defesa do pólen",
          },
          effect: {
            en: "If an attack does damage to Erika's Vileplume while it's your Active Pokmon <em>(even if it's Knocked Out)</em>, flip a coin. If heads, your opponent's Active Pokmon is now Confused. This power works even while Erika's Vileplume is Asleep, Confused, or Paralyzed.",
            ja: "攻撃があなたのアクティブなPokmon <em>（たとえそれがノックアウトされていても）である間にエリカのvileplumeにダメージを与える場合、コインをひっくり返します。頭の場合、相手のアクティブなポクモンが混乱しています。エリカのvileplumeが眠っている、混乱し、麻痺しているときでさえ、この力は機能します。",
            fr: "Si une attaque endommage le vileplume d'Erika alors que c'est votre pokmon actif <em> (même s'il est éliminé) </em>, retournez une pièce. Si les têtes, le pokmon actif de votre adversaire est désormais confus. Ce pouvoir fonctionne même pendant que le vileplume d'Erika est endormi, confus ou paralysé.",
            de: "Wenn ein Angriff Schädigung von Erikas Vileplume schädigt, während es Ihr aktiver Pokmon <em> ist (auch wenn es ausgeschaltet ist) </em>, drehen Sie eine Münze um. Wenn Sie Köpfe haben, ist das aktive Pokmon Ihres Gegners jetzt verwirrt. Diese Kraft funktioniert auch, während Erikas Vileplume schläft, verwirrt oder gelähmt ist.",
            es: "Si un ataque da daño a la villeza de Erika, mientras que es su Pokmon activo <em> (incluso si está golpeado) </em>, voltee una moneda. Si se dirige, el Pokmon activo de tu oponente ahora está confundido. Este poder funciona incluso mientras el Vileplume de Erika está dormido, confundido o paralizado.",
            it: "Se un attacco fa danni al vileplume di Erika mentre è il tuo Pokmon attivo <em> (anche se viene eliminato) </em>, capovolgi una moneta. Se la testa, i Pokmon attivi del tuo avversario sono ora confusi. Questo potere funziona anche mentre il vileplume di Erika è addormentato, confuso o paralizzato.",
            pt: "Se um ataque causar danos ao vileplume de Erika enquanto é o seu Pokmon ativo <em> (mesmo que seja nocauteado) </em>, vire uma moeda. Se as cabeças, o Pokmon ativo do seu oponente agora está confuso. Esse poder funciona mesmo enquanto o vileplume de Erika está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Mega Drain",
            ja: "メガドレイン",
            fr: "Méga drainage",
            de: "Mega Drain",
            es: "Mega drenaje",
            it: "Mega drenaggio",
            pt: "Mega dreno",
          },
          effect: {
            en: "If Erika's Vileplume does damage to the Defending Pokemon (after applying Weakness and Resistance), remove a number of damage counters from Erika's Vileplume equal to half the damage done to the Defending Pokemon (rounded up to the nearest 10). If Erika's Vileplume has fewer damage counters than that, remove all of them.",
            ja: "ErikaのVileplumeが防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、ErikaのVileplumeから多くのダメージカウンターを除去して、防御ポケモンに与えられたダメージの半分に等しい（最も近い10に丸められます）。 ErikaのVileplumeのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
            fr: "Si le vileplume d'Erika endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), retirez un certain nombre de compteurs de dégâts du vileplume d'Erika égal à la moitié des dommages causés au Pokémon en défense (arrondi jusqu'au 10 près). Si le vileplume d'Erika a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Wenn Erikas Vileplume das verteidigende Pokémon schädigt (nach Schwäche und Widerstand angewendet), entfernen Sie eine Reihe von Schadenszähnen von Erikas Vileplume, die der Hälfte der dem verteidigenden Pokémon angerichteten Schäden entsprechen (abgerundet auf die nächstgelegene 10). Wenn Erikas Vileplume weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Si el villejo de Erika da daño al Pokémon defensor (después de aplicar debilidad y resistencia), elimine una serie de contadores de daño de la villeza de Erika igual a la mitad del daño causado al Pokémon defensor (redondeado hasta el 10 más cercano). Si el Vileplume de Erika tiene menos contadores de daño que eso, retírelos todos.",
            it: "Se il vileplume di Erika fa danni al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), rimuovere una serie di contatori di danno dal vileplume di Erika pari alla metà del danno fatto al Pokemon in difesa (arrotondato fino ai 10 più vicini). Se il vileplume di Erika ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Se o vileplume de Erika causar danos aos Pokémon defensores (após aplicar fraqueza e resistência), remova vários contadores de danos do vileplume de Erika igual à metade dos danos causados ao Pokémon defensor (arredondado para os 10 mais próximos). Se o vileplume de Erika tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
