import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		732,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mountain Pass",
				fr: "Col de Montagne",
				es: "Pase Montaña",
				it: "Passo Montano",
				pt: "Desfiladeiro",
				de: "Bergpass"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, look at the top card of your opponent’s deck and put this Pokémon in the Lost Zone. If that card is a Supporter card, you may put it in the Lost Zone. If your opponent has no cards in their deck, you can’t use this Ability.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre main, vous pouvez le montrer. Dans ce cas, regardez la carte du dessus du deck de votre adversaire et placez ce Pokémon dans la Zone Perdue. Si cette carte est une carte Supporter, vous pouvez la placer dans la Zone Perdue. Si le deck de votre adversaire ne contient aucune carte, vous ne pouvez pas utiliser ce talent.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu mano, puedes enseñarlo. Si lo haces, mira la primera carta de la baraja de tu rival y pon este Pokémon en la Zona Perdida. Si esa carta es una carta de Partidario, puedes ponerla en la Zona Perdida. Si tu rival no tiene ninguna carta en su baraja, no puedes usar esta habilidad.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai questo Pokémon in mano, puoi mostrarlo. Se lo fai, guarda la prima carta del mazzo del tuo avversario, prendi questo Pokémon e mettilo nell’area perduta. Se quella carta è una carta Aiuto, puoi prenderla e metterla nell’area perduta. Se il tuo avversario non ha carte nel suo mazzo, non puoi usare questa abilità.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua mão, você poderá revelá-lo. Se fizer isto, olhe a primeira carta do baralho do seu oponente e coloque este Pokémon na Zona Perdida. Se aquela carta for uma carta de Apoiador, você poderá colocá-la na Zona Perdida. Se o seu oponente não tiver nenhuma carta no próprio baralho, você não poderá usar esta Habilidade.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn du dieses Pokémon auf deiner Hand hast, kannst du es deinem Gegner zeigen. Wenn du das machst, schau dir die oberste Karte des Decks deines Gegners an und lege dieses Pokémon ins Nirgendwo. Wenn jene Karte eine Unterstützerkarte ist, kannst du sie ins Nirgendwo legen. Wenn dein Gegner keine Karten in seinem Deck hat, kannst du diese Fähigkeit nicht einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365801
	}
}

export default card
