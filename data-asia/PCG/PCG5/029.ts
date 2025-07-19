import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Walrein ex",
         ja: "Walrein Ex",
         fr: "Walrein ex",
         de: "Walrein ex",
         es: "Walrein Ex",
         it: "Walrein Ex",
         pt: "Walrein Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [365],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Icy Aura",
            ja: "氷のオーラ",
            fr: "Aura glacée",
            de: "Eisige Aura",
            es: "Aura helada",
            it: "Aura ghiacciata",
            pt: "Aura gelada",
          },
          effect: {
            en: "As long as Walrein ex is your Active PokÃ©mon, put 1 damage counter on each Active PokÃ©mon (both yours and your opponent's) between turns, excluding Water PokÃ©mon.",
            ja: "Walrein ExがアクティブなPokã©Monである限り、WaterPokã©Monを除く、ターンの合間にアクティブなPokã©Mon（あなたと対戦相手の両方）に1つのダメージカウンターを置きます。",
            fr: "Tant que Walrein Ex est votre poké actif, mettez 1 compteur de dégâts sur chaque poké actif (le vôtre et celui de votre adversaire) entre les virages, à l'exclusion de l'eau de l'eau.",
            de: "Solange Walrein EX Ihr aktiver Poké Mon Mon ist, setzen Sie 1 Schadenschalter auf jeden aktiven Poké Mon (sowohl Ihre als auch die Ihres Gegners) zwischen den Kurven, ausgenommen Wasser Poké Mon Mon.",
            es: "Mientras Walrein Ex sea su Poké Mon activo, coloque 1 contador de daño en cada Poké activo (tanto el suyo como el de su oponente) entre giros, excluyendo el agua de agua.",
            it: "Finché Walrein ex è il tuo poké attivo, metti 1 contatore di danni su ogni poké attivo (sia il tuo che il tuo avversario) tra i turni, escluso l'acqua Poké mon.",
            pt: "Enquanto o Walrein Ex for o seu Poké de Mon ativo, coloque 1 contador de danos em cada Poké de Mon ativo (tanto o seu quanto o do seu oponente) entre turnos, excluindo a água Poké Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
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
            en: "Choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Ice Throw",
            ja: "アイススロー",
            fr: "Lancer de glace",
            de: "Eiswurf",
            es: "Lanzamiento de hielo",
            it: "Lancio di ghiaccio",
            pt: "Gelo",
          },
          effect: {
            en: "If the Defending Pokemon is a Fighting Pokemon, this attack's base damage is 120 instead of 80.",
            ja: "防御ポケモンが戦闘ポケモンである場合、この攻撃の基本ダメージは80ではなく120です。",
            fr: "Si le Pokémon en défense est un Pokémon de combat, les dégâts de base de cette attaque sont de 120 au lieu de 80.",
            de: "Wenn das verteidigende Pokémon ein kämpfendes Pokemon ist, beträgt der Grundschaden dieses Angriffs 120 anstelle von 80.",
            es: "Si el Pokémon defensor es un Pokémon de lucha, el daño base de este ataque es 120 en lugar de 80.",
            it: "Se il Pokemon in carica è un Pokemon combattente, il danno base di questo attacco è 120 anziché 80.",
            pt: "Se o Pokémon atual é um Pokémon de combate, o dano básico deste ataque é de 120 em vez de 80.",
          },
          damage: 80,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
