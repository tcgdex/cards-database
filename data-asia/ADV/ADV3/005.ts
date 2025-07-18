import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Ninjask",
         ja: "ニンジャスク",
         fr: "Ninjasque",
         de: "Ninjask",
         es: "Ninja",
         it: "Ninjask",
         pt: "Ninjask",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [291],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Loose Shell",
            ja: "ゆるいシェル",
            fr: "Coquille",
            de: "Lose Schale",
            es: "Concha suelta",
            it: "Guscio sciolto",
            pt: "Concha solta",
          },
          effect: {
            en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your PokÃ©mon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched PokÃ©mon as a Basic PokÃ©mon. Shuffle your deck afterward.",
            ja: "ターン中に、手からニンジャスクをプレイしてポカンの1つを進化させると、シェディンジャを検索してベンチに置くことができます。新しいベンチ付きポカモンを基本的なポケモンとして扱います。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous jouez à Ninjask de votre main pour évoluer 1 de votre pokã © Mon, vous pouvez rechercher votre deck pour Shedinja et le mettre sur votre banc. Traitez le nouveau Pokã © Mon comme un Poké de base. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges Ninjask von Ihrer Hand spielen, um 1 Ihrer Poké mon zu entwickeln, können Sie Ihr Deck nach Shedinja suchen und es auf Ihre Bank legen. Behandle den neuen Bank -Poké Mon als Basic Poké Mon Mon. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando juegas Ninjask desde tu mano para evolucionar 1 de tu Poké Mon, puedes buscar a tu mazo para Shedinja y ponerlo en tu banco. Trate el nuevo banquero Poké Mon como un Poké básico de Mon. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando giochi a Ninjask dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare nel tuo mazzo Shedinja e metterlo in panchina. Tratta il nuovo poké in panchina come un poké di base mon. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você toca Ninjask da sua mão para evoluir 1 do seu Poké Mon, você pode procurar seu baralho por Shedinja e colocá -lo em seu banco. Trate o novo Poké de Bancado como um Poké de Mon básico. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Touch",
            ja: "クイックタッチ",
            fr: "Toucher rapide",
            de: "Schnelle Berührung",
            es: "Toque rápido",
            it: "Tocco rapido",
            pt: "Toque rápido",
          },
          effect: {
            en: "You may switch Ninjask with 1 of your Benched Pokemon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokemon.",
            ja: "ベンチ付きポケモンの1つでニンジャスクを切り替えることができます。そうすれば、ニンジャスクに取り付けられた草のエネルギーカードを新しいアクティブポケモンに移動できます。",
            fr: "Vous pouvez changer de ninjasque avec 1 de votre Pokémon banc. Si vous le faites, vous pouvez déplacer n'importe quel nombre de cartes d'énergie d'herbe attachées à Ninjask au nouveau Pokémon actif.",
            de: "Sie können Ninjask mit 1 Ihrer Bank -Pokemon wechseln. Wenn Sie dies tun, können Sie eine beliebige Anzahl von Grasergiekarten an Ninjask an das neue aktive Pokémon verschieben.",
            es: "Puede cambiar Ninjask con 1 de su Pokémon de banca. Si lo hace, puede mover cualquier cantidad de tarjetas de energía de hierba unidas a Ninjask al nuevo Pokémon activo.",
            it: "Puoi cambiare ninjask con 1 del tuo Pokemon in panchina. Se lo fai, puoi spostare un numero qualsiasi di carte di energia dell'erba attaccate a Ninjask al nuovo Pokemon attivo.",
            pt: "Você pode trocar de ninjask com 1 do seu Pokémon em banco. Se o fizer, você pode mover qualquer número de cartões de energia da grama anexados ao Ninjask para o novo Pokémon ativo.",
          },
          damage: 30,
        },
      ],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
