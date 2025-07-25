import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Swalot",
         ja: "スワロット",
         fr: "Swalot",
         de: "Swalot",
         es: "Bucle",
         it: "Swalot",
         pt: "Swalot",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [317],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Amnesia",
            ja: "健忘症",
            fr: "Amnésie",
            de: "Amnesie",
            es: "Amnesia",
            it: "Amnesia",
            pt: "Amnésia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Elija 1 de los ataques defensores de Pokémon. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Swallow Up",
            ja: "飲み込む",
            fr: "Avaler",
            de: "Verschlingen",
            es: "Tragar",
            it: "Inghiottire",
            pt: "Engolir",
          },
          effect: {
            en: "Before doing damage, count the remaining HP of the Defending Pokemon and Swalot. If the Defending Pokemon has fewer remaining HP than Swalot's, this attack does 50 damage plus 30 more damage.",
            ja: "ダメージを与える前に、防御ポケモンとスワロットの残りのHPを数えます。防御ポケモンの残りのHPがSwalotよりも少ない場合、この攻撃は50のダメージと30のダメージを与えます。",
            fr: "Avant de faire des dégâts, comptez les HP restants du Pokémon et du Swalot en défense. Si le Pokémon en défense a moins de HP restants que celui de Swalot, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Zählen Sie vor Schaden den verbleibenden HP des verteidigenden Pokemon und Swalot. Wenn das verteidigende Pokemon weniger verbleibende HP als Swalots hat, verursacht dieser Angriff 50 Schaden zuzüglich 30 mehr Schaden.",
            es: "Antes de hacer daño, cuente el HP restante del Pokémon y Swalot defensores. Si el Pokémon defensor tiene menos HP restante que el de Swalot, este ataque hace 50 daños más 30 daños más.",
            it: "Prima di fare danni, conta i restanti HP del Pokemon e Swalot in carica. Se il Pokemon in carica ha meno HP rimanenti rispetto a quello di Swalot, questo attacco infligge 50 danni più 30 danni in più.",
            pt: "Antes de causar danos, conte o HP restante dos Pokémon e Swalot defensores. Se o Pokémon atual tiver menos HP restante que o de Swalot, esse ataque causará 50 danos mais 30 danos.",
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
