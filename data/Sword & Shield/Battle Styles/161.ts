import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Phoebe",
		fr: "Spectra",
		es: "Fátima",
		it: "Ester",
		pt: "Spectra",
		de: "Antonia"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "During this turn, damage from your Pokémon VMAX’s attacks isn’t affected by any effects on your opponent’s Active Pokémon.",
		fr: "Pendant ce tour, les dégâts des attaques de vos Pokémon-VMAX ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		es: "Durante este turno, el daño de los ataques de tus Pokémon VMAX no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
		it: "Durante questo turno, i danni degli attacchi dei tuoi Pokémon-VMAX non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
		pt: "Durante este turno, o dano dos ataques dos seus Pokémon VMAX não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
		de: "Während dieses Zuges wird der Schaden durch Attacken deiner Pokémon-VMAX durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card