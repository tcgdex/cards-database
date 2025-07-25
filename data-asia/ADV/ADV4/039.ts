import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Kyogre ex",
         ja: "Kyogre Ex",
         fr: "Kyogre ex",
         de: "Kyogre ex",
         es: "Kyogre ex",
         it: "Kyogre Ex",
         pt: "Kyogre Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [382],
      hp: 100,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Mark of Antiquity",
            ja: "古代のマーク",
            fr: "Marque de l'antiquité",
            de: "Mark der Antike",
            es: "Marca de la antigüedad",
            it: "Marco dell'antichità",
            pt: "Marca da antiguidade",
          },
          effect: {
            en: "As long as Kyogre ex is your Active PokÃ©mon, each player's Groudon ex and Rayquaza ex can't attack.",
            ja: "Kyogre Exがあなたのアクティブなポカモンである限り、各プレイヤーのGroudon ExとRayquaza Exは攻撃できません。",
            fr: "Tant que Kyogre Ex est votre poké actif, le Groudon EX de chaque joueur et Rayquaza Ex ne peuvent pas attaquer.",
            de: "Solange Kyogre Ex Ihr aktiver Poké Mon ist, können die Groudon Ex und Rayquaza Ex jedes Spielers nicht angreifen.",
            es: "Mientras Kyogre Ex sea tu Poké Mon activo, el Groudon Ex y Rayquaza Ex de cada jugador no pueden atacar.",
            it: "Finché Kyogre Ex è il tuo Pokã © attivo, Groudon Ex e Rayquaza Ex non possono attaccare.",
            pt: "Enquanto o Kyogre Ex for o seu Poké Mon ativo, o Groudon Ex e o Rayquaza ex de cada jogador não pode atacar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Water Arrow",
            ja: "水の矢",
            fr: "Flèche d'eau",
            de: "Wasserpfeil",
            es: "Flecha de agua",
            it: "Freccia d'acqua",
            pt: "Seta de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Super Tidal Wave",
            ja: "超潮の波",
            fr: "Super raz de marée",
            de: "Super Tidal Wave",
            es: "Súper marea",
            it: "Onda super marea",
            pt: "Onda super maré",
          },
          effect: {
            en: "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck.",
            ja: "相手に手を見せることができます。そうすれば、この攻撃は50のダメージに加えて、手のエネルギーカードごとに10ダメージを10回します。ダメージを与えた後、エネルギーカードをデッキに戻します。",
            fr: "Vous pouvez montrer votre main à votre adversaire. Si vous le faites, cette attaque fait 50 dégâts plus 10 dégâts supplémentaires pour chaque carte d'énergie dans votre main. Après avoir fait des dégâts, remuez les cartes d'énergie dans votre deck.",
            de: "Sie können Ihre Hand Ihrem Gegner zeigen. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 10 weitere Schäden für jede Energiekarte in der Hand. Nachdem Sie Schaden angerichtet haben, mischen Sie die Energiekarten wieder in Ihr Deck.",
            es: "Puedes mostrar tu mano a tu oponente. Si lo hace, este ataque hace 50 daños más 10 daños más para cada tarjeta de energía en su mano. Después de hacer daño, mueva las cartas de energía a tu mazo.",
            it: "Puoi mostrare la tua mano al tuo avversario. Se lo fai, questo attacco infligge 50 danni più 10 danni in più per ogni carta energetica in mano. Dopo aver fatto danni, rimuovi le carte di energia nel tuo mazzo.",
            pt: "Você pode mostrar sua mão ao seu oponente. Se o fizer, esse ataque causa 50 danos mais 10 mais danos para cada cartão de energia na sua mão. Depois de causar danos, embaralhe as cartas de energia de volta ao seu baralho.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
