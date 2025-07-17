import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Ivysaur",
         ja: "暗いアイビサウルス",
         fr: "Ivysaur sombre",
         de: "Dunkler Ivysaurier",
         es: "Ivysaur oscuro",
         it: "Ivysaur scuro",
         pt: "Dark Ivysaur",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [2],
      hp: 50,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Vine Pull",
            ja: "ブドウの引っ張り",
            fr: "Traction de la vigne",
            de: "Rebezug",
            es: "Vina",
            it: "Tiro di vite",
            pt: "Vine Pull",
          },
          effect: {
            en: "Once during your turn when Dark Ivysaur retreats, choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon.",
            ja: "ダークイヴィサウルスが退却する順番中に、相手のベンチポケモンを1つ選択し、アクティブなポケモンと交換します。",
            fr: "Une fois pendant votre tour lorsque Dark Ivysaur se retire, choisissez un des pokémon bancés de votre adversaire et changez-le avec son Pokémon actif.",
            de: "Sobald Sie in Ihrem Zug als Dark Ivysaurier zurückziehen, wählen Sie 1 der Pokémon Ihres Gegners und wechseln Sie es mit seinem aktiven Pokémon.",
            es: "Una vez durante su turno, cuando se retira el Ivysaur Oscuro, elija 1 de los Pokémon de banca de su oponente y cíguelo con sus Pokémon activos.",
            it: "Una volta durante il tuo turno, quando Dark Ivysaur si ritira, scegli 1 dei Pokémon in panchina del tuo avversario e cambialo con il suo Pokémon attivo.",
            pt: "Uma vez durante o seu turno, quando o Dark Ivysaur se retirar, escolha 1 dos Pokémon com bancada do seu oponente e mude -o com o Pokémon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Fury Strikes",
            ja: "フューリーストライク",
            fr: "Fury frappe",
            de: "Wutschläge",
            es: "Huelgas de furia",
            it: "Colpi di furia",
            pt: "Fury atinge",
          },
          effect: {
            en: "Your opponent puts 3 markers onto his or her Pokemon (divided as he or she chooses). (More than 1 marker can be put on the same Pokemon.) Then, this attack does 10 damage to each Pokemon for each marker on it. Don't apply Weakness and Resistance. Remove the markers at the end of the turn.",
            ja: "対戦相手は、3つのマーカーをポケモンに置きます（選択したように分割されています）。 （同じポケモンに1つ以上のマーカーを置くことができます。）その後、この攻撃は、各マーカーに対して各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。ターンの終わりにマーカーを取り外します。",
            fr: "Votre adversaire met 3 marqueurs sur son Pokémon (divisé comme il le choisit). (Plus d'un marqueur peut être mis sur le même Pokémon.) Ensuite, cette attaque fait 10 dégâts à chaque pokemon pour chaque marqueur dessus. N'appliquez pas la faiblesse et la résistance. Retirez les marqueurs à la fin du virage.",
            de: "Ihr Gegner legt 3 Markierungen auf sein Pokémon (geteilt, wie er oder sie wählt). (Mehr als 1 Marker kann auf dasselbe Pokémon gelegt werden.) In diesem Angriff schädigt jedes Pokémon für jeden Marker 10 Schäden. Wenden Sie keine Schwäche und Widerstand an. Entfernen Sie die Markierungen am Ende der Kurve.",
            es: "Tu oponente pone 3 marcadores en su Pokémon (dividido como él o ella elige). (Se pueden poner más de 1 marcador en el mismo Pokémon). Luego, este ataque hace 10 daños a cada Pokémon para cada marcador. No aplique debilidad y resistencia. Retire los marcadores al final del giro.",
            it: "Il tuo avversario mette 3 marcatori sul suo Pokemon (diviso mentre sceglie). (Più di 1 marcatore può essere messo sullo stesso Pokemon.) Quindi, questo attacco fa 10 danni a ciascun Pokemon per ogni marcatore su di esso. Non applicare debolezza e resistenza. Rimuovere i marcatori alla fine del turno.",
            pt: "Seu oponente coloca 3 marcadores em seu Pokémon (dividido como ele escolhe). (Mais de 1 marcador pode ser colocado no mesmo Pokemon.) Então, esse ataque causa 10 danos a cada Pokemon para cada marcador nele. Não aplique fraqueza e resistência. Remova os marcadores no final do turno.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
