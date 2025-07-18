import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Minun",
         ja: "ミンン",
         fr: "Minou",
         de: "Minun",
         es: "Minun",
         it: "Minun",
         pt: "Minun",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [312],
      hp: 50,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Chain of Events",
            ja: "イベントのチェーン",
            fr: "Chaîne d'événements",
            de: "Ereigniskette",
            es: "Grupo de noticias",
            it: "Catena di eventi",
            pt: "Cadeia de eventos",
          },
          effect: {
            en: "As long as Minun is your Active PokÃ©mon, whenever your other Active PokÃ©mon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active PokÃ©mon has the Chain of Events PokÃ©-Body.",
            ja: "MinunがアクティブなPokã©Monである限り、他のアクティブなPokã©Mon（もしあれば、攻撃があれば、最初の攻撃後に応援を使用することができます（応援を使用するために必要なエネルギーが必要です）。他のアクティブなポカモンがイベントのチェーンを持っている場合でも、この方法で応援を使用することはできません。",
            fr: "Tant que Minun se trouve votre poké actif, chaque fois que votre autre poké actif, le cas échéant, les attaques, vous pouvez utiliser la joie après la première attaque (vous avez toujours besoin de l'énergie nécessaire pour utiliser). Vous ne pouvez pas utiliser plus d'une fois de cette manière, même si votre autre pokã © mon actif a la chaîne des événements Pokã © -Body.",
            de: "Solange Minun Ihr aktiver Pokémon ist, können Sie nach dem ersten Angriff, wenn Ihr anderes aktiver Poké mon, nach Angriffen angreift (Sie benötigen immer noch die notwendige Energie, um Jubel anzuwenden). Sie können auf diese Weise nicht mehr als einmal anfeuern, selbst wenn Ihr anderer aktiver Poké Mon die Kette von Ereignissen hat.",
            es: "Mientras Minun sea su Poké Mon activo, cada vez que su otro Poké Activo, Mon, si es que hay alguno, ataques, puede usar la alegría después del primer ataque (aún necesita la energía necesaria para usar la alegría). No puede usar alegría más de una vez de esta manera, incluso si su otro Poké activo tiene la cadena de eventos Poké-Body.",
            it: "Finché Minun è il tuo poké attivo, ogni volta che l'altro poké attivo, se presente, è possibile utilizzare il tifo dopo il primo attacco (hai ancora bisogno dell'energia necessaria per usare il tifo). Non puoi usare il tifo più di una volta in questo modo anche se l'altro tuo poké attivo ha la catena di eventi poké -body.",
            pt: "Enquanto Minun for o seu Poké Mon ativo, sempre que o seu outro Poké Mon, se houver, os ataques, você poderá usar a alegria após o primeiro ataque (você ainda precisa da energia necessária para usar a alegria). Você não pode usar a alegria mais de uma vez dessa maneira, mesmo que seu outro Poké Mon tenha a cadeia de eventos Poké-cor.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Cheer On",
            ja: "応援",
            fr: "Encourager",
            de: "Anfeuern",
            es: "Animar",
            it: "Applaudire",
            pt: "Torcer",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon (including Minun).",
            ja: "各ポケモン（Minunを含む）から1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon (y compris Minun).",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon (einschließlich Minun).",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon (incluido Minun).",
            it: "Rimuovi 1 contatore di danni da ciascuno dei Pokemon (incluso Minun).",
            pt: "Remova 1 contador de danos de cada um dos seus Pokémon (incluindo Minun).",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Special Circuit",
            ja: "特別なサーキット",
            fr: "Circuit spécial",
            de: "Spezialkreis",
            es: "Circuito especial",
            it: "Circuito speciale",
            pt: "Circuito especial",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. If you choose Pokemon that has a Poké-Power or Poké-Body, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。ポケパワーまたはポケボディを持つポケモンを選択する場合、この攻撃は代わりに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. Si vous choisissez Pokémon qui a une puissance Poké ou Poké-corps, cette attaque fait 40 dégâts à la place. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. Wenn Sie Pokemon mit einer Poké-Kraft oder einem Poké-Körper entscheiden, verursacht dieser Angriff stattdessen 40 Schaden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. Si eliges Pokemon que tiene un Poké-Power o Poké-Body, este ataque hace 40 daños en su lugar. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. Se scegli Pokemon con un Poké-Power o Poké-Body, questo attacco fa invece 40 danni. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. Se você escolher Pokemon que possui um poké-poder ou corpo de Poké, esse ataque causará 40 danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
