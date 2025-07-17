import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Porygon2",
         ja: "Dark Porygon2",
         fr: "Porygon sombre2",
         de: "Dark Porygon2",
         es: "Dark Porygon2",
         it: "Dark Porygon2",
         pt: "Porygon escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [233],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Spatial Distortion",
            ja: "空間歪み",
            fr: "Distorsion spatiale",
            de: "Räumliche Verzerrung",
            es: "Distorsión espacial",
            it: "Distorsione spaziale",
            pt: "Distorção espacial",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there's already a Stadium card in play, discard it.) This power can't be used if Dark Porygon2 is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、捨てられた山からスタジアムカードを選択して、それを演奏します。 （すでにスタジアムカードが存在している場合は、捨ててください。）Dark Porygon2が眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, choisissez une carte de stade dans votre tas de défausse et mettez-la en jeu. (S'il y a déjà une carte de stade en jeu, jetez-la.) Ce pouvoir ne peut pas être utilisé si Dark Porygon2 est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, wählen Sie eine Stadionkarte von Ihrem Ablagerungsstapel aus und stecken Sie sie ins Spiel. (Wenn es bereits eine Stadionkarte im Spiel gibt, verwerfen Sie sie.) Diese Kraft kann nicht verwendet werden, wenn Dark Porygon2 schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, elija una tarjeta de estadio de su pila de descarte y póngala en juego. (Si ya hay una carta del estadio en juego, deséchela). Este poder no se puede usar si Dark Porygon2 está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, scegli una carta dello stadio dal tuo mucchio di scarti e mettila in gioco. (Se c'è già una carta stadio in gioco, scartarla.) Questo potere non può essere usato se Dark Porygon2 è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, escolha uma carta do estádio na sua pilha de descarte e coloque -a em jogo. (Se já houver uma carta de estádio em jogo, descarte -a.) Esse poder não pode ser usado se o porronário escuro 2 estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Curve Attack",
            ja: "曲線攻撃",
            fr: "Attaque de courbe",
            de: "Kurvenangriff",
            es: "Ataque curva",
            it: "Attacco curva",
            pt: "Ataque de curva",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にDark Porygon2に攻撃によって行われたすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dégâts causés par les attaques à Dark Porygon2 pendant le prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden durch Angriffe auf Dark Porygon2 während der nächsten Kurve Ihres Gegners. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño causado por ataques a Dark Porygon2 durante el próximo turno de tu oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni causati dagli attacchi a Dark Porygon2 durante il turno successivo dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados por ataques ao porro -escuro 2 durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
