import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Ditto",
         ja: "同上",
         fr: "Idem",
         de: "Dito",
         es: "Ídem",
         it: "Idem",
         pt: "Idem",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [132],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Form Variation",
            ja: "フォームバリエーション",
            fr: "Variation de la forme",
            de: "Formvariation",
            es: "Variación de forma",
            it: "Variazione della forma",
            pt: "Variação de forma",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your discard pile for a Basic PokÃ©mon (excluding PokÃ©mon-ex and Ditto) and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Place Ditto in the discard pile.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、基本的なPokã©Mon（Pokã©Mon-ExおよびDittoを除く）を廃棄パイルを検索し、Dittoで切り替えることができます。 （同上、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）にあります。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre pieu de défausse pour un pokã © Mon de base (à l'exclusion de Pokã © MON-EX et idem) et le changer avec idem. (Toutes les cartes attachées à idem, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau poké.) Placez idem dans la pile de défausse.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) Ihren Entwurfshaufen nach einem grundlegenden Poké Mon (ohne Poké Mon-ex und dito) durchsuchen und mit dem dito schalten können. (Alle Karten, die an Ditto verbunden sind, Schadenszähler, besondere Bedingungen und Auswirkungen darauf befinden sich jetzt auf dem neuen Poké mon.) Legen Sie dito in den Ablagerungsstapel.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su pila de descarte para un Poké básico (excluyendo Poké Mon-Ex y ídem) y cambiarlo con ídem. (Cualquier tarjetas adjuntas a ídem, contadores de daño, condiciones especiales y efectos sobre ella ahora están en el nuevo Poké Mon.) Coloque ídem en la pila de descarte.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nella pila di scarto un poké mon di base (escluso Poké mon-ex e idem) e cambiarlo con idem. (Eventuali carte collegate a idem, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo Poké mon.) Posizionare idem nella pila di scarto.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar sua pilha de descarte por um Poké-Mon básico (excluindo Poké Mon-Ex e Ditto) e trocá-lo com o Idem. (Quaisquer cartões anexados ao idem, contadores de danos, condições especiais e efeitos nele estão agora no novo Poké Mon.) Coloque o idem na pilha de descarte.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Ball",
            ja: "エネルギーボール",
            fr: "Balle énergétique",
            de: "Energieball",
            es: "Bola de energía",
            it: "Sfera di energia",
            pt: "Bola de energia",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy attached to Ditto but not used to pay for this attack's Energy cost. You can't add more then 20 damage in this way.",
            ja: "10ダメージに加えて、同上に付着した各エネルギーの10ダメージをさらに10ダメージしますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée à idem mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Ditto verbundene Energie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schaden hinzufügen.",
            es: "Hace 10 daños más 10 daños más por cada energía adjunta a ídem pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 10 danni più 10 danni per ogni energia attaccata a Idem ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "10 danos mais 10 danos mais danos para cada energia anexada ao Ditto, mas não costumava pagar pelo custo de energia deste ataque. Você não pode adicionar mais do que 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
