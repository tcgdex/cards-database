import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Yveltal ex",
		fr: "Yveltal-ex",
		es: "Yveltal ex",
		de: "Yveltal-ex",
		it: "Yveltal-ex",
		pt: "Yveltal ex"
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [
		717
	],
	hp: 210,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			name: {
				en: "Soul Destroyer",
				fr: "Destructeur d'Âmes",
				es: "Destructor de Almas",
				de: "Seelenvernichter",
				it: "Distruggianima",
				pt: "Destruidor de Almas"
			},
			effect: {
				en: "Knock Out each of your opponent's Pokémon that has 50 HP or less remaining.",
				fr: "Mettez K.O. chacun des Pokémon de votre adversaire auxquels il reste 50 PV ou moins.",
				es: "Deja Fuera de Combate a cada uno de los Pokémon de tu rival a los que les queden 50 PS o menos.",
				de: "Mache jedes Pokémon deines Gegners, das 50 oder weniger verbleibende KP hat, kampfunfähig.",
				it: "Metti KO ciascuno dei Pokémon del tuo avversario che ha 50 PS o meno rimanenti.",
				pt: "Nocauteie cada um dos Pokémon do seu oponente que tiver PS restante de 50 ou menos."
			}
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			name: {
				en: "Dark Strike",
				fr: "Frappe Ténébreuse",
				es: "Golpe Siniestro",
				de: "Finsterschlag",
				it: "Colpo Ombra",
				pt: "Golpe de Escuridão"
			},
			damage: "210",
			effect: {
				en: "During your next turn, this Pokémon can't use Dark Strike.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Ténébreuse.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Siniestro.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Finsterschlag nicht einsetzen.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Ombra.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Escuridão."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684387,
		cardmarket: 877522
	}
}

export default card
