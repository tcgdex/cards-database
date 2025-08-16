import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Arcanine",
         ja: "軽アルカニン",
         fr: "Arcanine légère",
         de: "Leichtes Arkanin",
         es: "Arcanina ligera",
         it: "Arcanina leggera",
         pt: "Arcanine leve",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 100,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Drive Off",
            ja: "ドライブします",
            fr: "Parcourir",
            de: "Losfahren",
            es: "Ahuyentar",
            it: "Scatene",
            pt: "Saia",
          },
          effect: {
            en: "As long as Light Arcanine is your Active Pokmon, once during your turn <em>(before your attack)</em>, if your opponent has any Benched Pokmon, he or she chooses 1 of them and switches it with the Defending Pokmon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralyzed.",
            ja: "軽いアルカニンがあなたのアクティブなポクモンである限り、ターン<em>（攻撃の前に）</em>の間に一度、相手がベンチを持っている場合、彼または彼女はそれらの1つを選択し、ディフェンディングポクモンと交換します。軽いアルカニンが眠ったり、混乱したり、麻痺したりしている間、この力は使用できません。",
            fr: "Tant que l'arcanine légère est votre pokmon actif, une fois pendant votre tour <em> (avant votre attaque) </em>, si votre adversaire a un pokmon banc, il en choisit un et le change avec le Pokmon en défense. Ce pouvoir ne peut pas être utilisé pendant que l'arcanine légère est endormie, confuse ou paralysée.",
            de: "Solange Lichtarkanin Ihr aktives Pokmon ist, einmal während Ihres Zuges <em> (vor Ihrem Angriff) </em>, wenn Ihr Gegner Pokmon mit Bank eingeladen hat, wählt er oder sie 1 davon aus und wechselt es mit dem verteidigenden Pokmon. Diese Kraft kann nicht angewendet werden, während Lichtarkanin schläft, verwirrt oder gelähmt ist.",
            es: "Mientras el arcanino ligero sea tu Pokmon activo, una vez durante tu turno <em> (antes de tu ataque) </em>, si tu oponente tiene algún Pokmon de banca, él o ella elige 1 de ellos y lo cambia con el Pokmon defensor. Este poder no se puede usar mientras que la arcanina ligera está dormida, confundida o paralizada.",
            it: "Finché l'Arcanina leggera è il tuo Pokmon attivo, una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se il tuo avversario ha qualche Pokmon in panchina, ne sceglie 1 e lo cambia con il Pokmon in difesa. Questa potenza non può essere usata mentre l'arcanina leggera è addormentata, confusa o paralizzata.",
            pt: "Enquanto o arcanino leve for o seu Pokmon ativo, uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o seu oponente tiver algum Pokmon em bancada, ele escolhe 1 deles e o troca com o Pokmon defensor. Esse poder não pode ser usado enquanto o arcanino leve está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Gentle Flames",
            ja: "穏やかな炎",
            fr: "Flammes douces",
            de: "Sanfte Flammen",
            es: "Llamas suaves",
            it: "Fiamme delicate",
            pt: "Chamas suaves",
          },
          effect: {
            en: "If the Defending Pokemon is a Baby Pokemon, this attack does 10 damage instead of 50. If the Defending Pokemon is a Basic Pokemon, this attack does 30 damage instead of 50.",
            ja: "防御ポケモンがベビーポケモンの場合、この攻撃は50ではなく10ダメージを与えます。防御ポケモンが基本的なポケモンである場合、この攻撃は50ではなく30のダメージを与えます。",
            fr: "Si le Pokémon en défense est un bébé Pokémon, cette attaque fait 10 dégâts au lieu de 50. Si le Pokémon en défense est un Pokémon de base, cette attaque fait 30 dégâts au lieu de 50.",
            de: "Wenn das verteidigende Pokémon ein Baby -Pokemon ist, verursacht dieser Angriff 10 Schaden anstelle von 50. Wenn das verteidigende Pokémon ein einfaches Pokémon ist, verursacht dieser Angriff 30 Schaden anstelle von 50.",
            es: "Si el Pokémon defensor es un Pokémon Baby, este ataque hace 10 daños en lugar de 50. Si el Pokémon defensor es un Pokémon básico, este ataque hace 30 daños en lugar de 50.",
            it: "Se il Pokemon in carica è un Pokemon per bambini, questo attacco fa 10 danni anziché 50. Se il Pokemon in difesa è un Pokemon di base, questo attacco fa 30 danni anziché 50.",
            pt: "Se o Pokémon atual for um Pokémon para bebês, esse ataque causará 10 danos em vez de 50.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
